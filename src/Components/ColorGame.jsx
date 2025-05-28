import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ColorGame() {
  const [gamesByColor, setGamesByColor] = useState({ red: [], green: [], orange: [] });
  const [predictionTime, setPredictionTime] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      axios.get('https://backend.chinchincasinoapp.com/api/latest-predicted-games')
        .then(res => {
          const grouped = { red: [], green: [], orange: [] };

          res.data.forEach(item => {
            if (item.color && grouped[item.color]) {
              grouped[item.color].push(item.game);
            }
          });

          setGamesByColor(grouped);

          if (res.data.length > 0 && res.data[0].created_at) {
            setPredictionTime(res.data[0].created_at);
          }
        })
        .catch(err => console.error('Error fetching games:', err));
    };

    fetchData(); // Initial fetch

    const intervalId = setInterval(fetchData, 1000); // Refresh every second

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  const getBgColor = (color) => {
    switch (color) {
      case 'red': return 'bg-danger';
      case 'green': return 'bg-success';
      case 'orange': return 'bg-warning';
      default: return 'bg-secondary';
    }
  };

  const getProgressColor = (color) => getBgColor(color);

  const getWinrate = (color) => {
    switch (color) {
      case 'red': return '10% - 40%';
      case 'green': return '80% - 98%';
      case 'orange': return '50% - 70%';
      default: return '';
    }
  };

  const getWinrateValue = (color) => {
    switch (color) {
      case 'red': return 40;
      case 'green': return 98;
      case 'orange': return 70;
      default: return 0;
    }
  };

  const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

  const renderGames = (color) => (
    <div className={`${getBgColor(color)} p-3 rounded text-center text-white`}>
      <h3 className="d-inline">{getWinrate(color)}</h3>
      <h4 className="ms-2 fw-semibold">Winning Chance Rate</h4>

      <div className="progress mb-3 mt-2" style={{ height: '2rem' }}>
        <div
          className={`progress-bar progress-bar-striped ${getProgressColor(color)}`}
          role="progressbar"
          style={{ width: `${getWinrateValue(color)}%` }}
          aria-valuenow={getWinrateValue(color)}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>

      {gamesByColor[color] && gamesByColor[color].length > 0 ? (
        <>
          <p className="mt-2">
            Prediction at: {new Date(predictionTime).toLocaleString('en-GB', {
              timeZone: 'Europe/London',
              dateStyle: 'short',
              timeStyle: 'short',
              hour12: true,
            })} ({capitalize(color)})
          </p>
          <div className="d-flex flex-wrap gap-3 mt-3 justify-content-center">
            {gamesByColor[color].map((game) => (
              <a
                key={game.id || `${game.name}-${game.provider}`}
                className='underline text-decoration-none text-white'
                href='https://playchin.com/NFFYJ8DF?aff_click_id=%7Bsubid%7D&tune_aff_id=1146&tune_offer_id=41&tune_url_id=268&persistence=1'
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-center" style={{ width: '120px' }}>
                  <img
                    src={game.image_url}
                    alt={game.name}
                    title={game.name}
                    className="img-fluid rounded"
                    style={{ height: '80px', objectFit: 'cover' }}
                  />
                  <span className="d-block mt-1 small">
                    {game.provider}<br />{game.name}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </>
      ) : (
        <p className="mt-2">No games for this color yet.</p>
      )}
    </div>
  );

  return (
    <div className="row g-3">
      <div className="col-lg col-sm-12">{renderGames('red')}</div>
      <div className="col-lg col-sm-12">{renderGames('green')}</div>
      <div className="col-lg col-sm-12">{renderGames('orange')}</div>
    </div>
  );
}

export default ColorGame;

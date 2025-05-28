import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PredictionHistory = () => {
  const [predictions, setPredictions] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const fetchHistory = () => {
      axios.get(`https://backend.chinchincasinoapp.com/api/prediction-history`)
        .then(res => {
          if (res.data && typeof res.data === 'object') {
            const grouped = Object.entries(res.data)
              .sort((a, b) => new Date(b[0]) - new Date(a[0]))
              .slice(1); // Skip the newest prediction (if needed)
            setPredictions(grouped);
            setLastUpdated(new Date());
          } else {
            setPredictions([]);
          }
        })
        .catch(err => {
          console.error("Error fetching history:", err);
          setPredictions([]);
        });
    };

    fetchHistory(); // Load initially
    const interval = setInterval(fetchHistory, 1000); // Refresh every second

    return () => clearInterval(interval);
  }, []);

  if (!Array.isArray(predictions) || predictions.length === 0) {
    return <p className="p-3 text-white text-center">No prediction history available.</p>;
  }

  return (
    <div className="p-3">
      <h3 className="text-center fw-bold mb-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#ED58A3" className="bi bi-trophy" viewBox="0 0 16 16">
          <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935M3.504 1q.01.775.056 1.469c.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.5.5 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667q.045-.694.056-1.469z" />
        </svg>
        Prediction History
      </h3>
      <p className="text-white small text-end">
        Last updated: <span className='color-red'>{lastUpdated?.toLocaleTimeString('en-GB', { hour12: true })}</span>
      </p>

      <div className="border rounded p-3 overflow-auto" style={{ maxHeight: '600px' }}>
        {predictions.map(([timestamp, games], index) => {
          const formattedDate = new Date(timestamp).toLocaleString('en-GB', {
            dateStyle: 'short',
            timeStyle: 'short',
            hour12: true,
          });

          const groupedByColor = games.reduce((acc, pred) => {
            if (!acc[pred.color]) acc[pred.color] = [];
            acc[pred.color].push(pred);
            return acc;
          }, {});

          return (
            <div key={timestamp} className="mb-4 border rounded p-3 shadow-sm bg-light">
              <h5 className="mb-3 fw-semibold">
                Prediction at: {formattedDate}
              </h5>

              {Object.entries(groupedByColor).map(([color, colorGames]) => (
                <div key={color} className="mb-3">
                  <h6 className={`fw-semibold text-${getColorClass(color)}`}>
                    {color.toUpperCase()}
                    <span className={`badge bg-${getColorClass(color)} ms-2`}>
                      {colorGames.length} games
                    </span>
                  </h6>
                  <div className="row row-cols-2 row-cols-md-5 g-3">
                    {colorGames.map(prediction => (
                      <a
                        key={prediction.id || `${prediction.game.name}-${prediction.color}`}
                        className='underline col text-center text-decoration-none text-dark'
                        href='https://playchin.com/NFFYJ8DF?aff_click_id=%7Bsubid%7D&tune_aff_id=1146&tune_offer_id=41&tune_url_id=268&persistence=1'
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div>
                          <img
                            src={prediction.game.image_url || 'fallback.jpg'}
                            alt={prediction.game.name || 'Game'}
                            title={prediction.game.name || 'Game'}
                            className="img-fluid rounded mb-2"
                            style={{ height: '80px', objectFit: 'cover' }}
                          />
                          <p className="fw-medium text-truncate text-black">
                            {prediction.game.name || 'Unknown Game'}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const getColorClass = (color) => {
  switch (color) {
    case 'red': return 'danger';
    case 'green': return 'success';
    case 'orange': return 'warning';
    default: return 'secondary';
  }
};

export default PredictionHistory;

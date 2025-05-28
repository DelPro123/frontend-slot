import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GamesList() {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  

  useEffect(() => {
   axios.get(`https://backend.chinchincasinoapp.com/api/games`)
      .then(response => {
        setGames(response.data);
        setLoading(false);
      })
      .catch(error => {
        // console.error('Error fetching games:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    game.provider.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="p-4 text-center text-muted">Loading games...</div>;
  if (error) return <div className="p-4 text-danger text-center">Error: {error}</div>;

  return (
    
    <div className="container py-4" style={{ backgroundColor: 'transparent' }}>
      <div className='d-flex d-inline align-items-center'>
         <h3 className='g-font'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#ED58A3" className="bi bi-dice-6" viewBox="0 0 16 16">
  <path d="M13 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zM3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3z"/>
  <path d="M5.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m-8 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg> All Games </h3>
          {/* Search Bar */}
          <div className="mb-3 text-center">
            <input
              type="text"
              className="form-control w-100 mx-auto mt-2 mx-5"
              placeholder="Search games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
      </div>

      {/* Games Grid */}
      <div className="d-flex mt-5">
        <div className="row d-flex align-items-center justify-content-center">
          {filteredGames.map((game) => (
            <div key={game.id} className="col-lg col-sm-3 col-md-4 affliate-link">
              <a className='underline' href='https://playchin.com/NFFYJ8DF?aff_click_id=%7Bsubid%7D&tune_aff_id=1146&tune_offer_id=41&tune_url_id=268&persistence=1'>
                <div className="card d-flex align-items-center text-center bg-transparent border-0 shadow-sm">
                  <img
                    src={game.image_url || '/placeholder-game.png'}
                    alt={game.name}
                    title={game.name}
                    className="card-img-top  text-center"
                  />
                  <div className="card-body p-2">
                    <p className="card-text small mb-1 text-truncate">{game.provider}</p>
                    <p className="card-text fw-semibold text-truncate">{game.name}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
          {filteredGames.length === 0 && (
            <div className="text-center text-white w-100 mt-4">No games found.</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GamesList;

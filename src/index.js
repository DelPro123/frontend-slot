import React from 'react'
import ReactDOM from 'react-dom/client'
import GamesList from './Components/GamesList'
import ColorGame from './Components/ColorGame'
import PredictionHistory from './Components/PredictionHistory'
import CountdownPage from './Components/CountdownPage'
import Instruction from './Components/Instruction'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/css/app.scss';


ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <>
     <div className='container-fluid'>
        <div className='row'>
            <CountdownPage/>
        </div>
        <div className='row'>
            <div className='col-lg-9 col-sm-12'>
                <ColorGame/>
            </div>
            <div className='col-lg-3 col-sm-12'>
                <PredictionHistory/>
            </div>
        </div>
    </div>
     <div className='container'> 
        <div className='row'>
            <Instruction/>
        </div>
     </div>
     <div className='container-fluid'> 
        <div className='row'>
            <GamesList/>
        </div>
     </div>  
     <footer className="d-flex flex-column flex-md-row justify-content-end align-items-center py-3 my-4 border-top">
    <div className="col-md-4 mb-2 mb-md-0 d-flex d-inline align-items-center my-3">
        <img className='footer-favicon' src="https://chinchin-casino.com/wp-content/uploads/2025/04/Chinchin-Favicon.webp" alt="Chin Chin Casino Favicon" />
        <p className="mb-0">The Chin Chin Casino App delivers the thrill of a real casino straight to your mobile device. Whether you're an experienced player or a beginner, you'll enjoy a wide selection of games, safe payment options, and a user-friendly interface designed for seamless play.</p>
    </div>
    <div className="col-md-6 mb-2 mb-md-0 my-3 ">
        <a href="https://prediction.chinchincasinoapp.com/" className="text-dark" target="_blank" rel="noopener noreferrer">
        <p className="mb-0 text-center">Copy Right © 2021 prediction.chinchincasinoapp.com</p>
        </a>
    </div>
    <div className="col-md-2 my-3">
        <div className="d-flex justify-content-end align-items-center gap-4">
        <a href="https://web.facebook.com/chinchincasinoapp" className="text-dark" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-facebook fa-lg"></i>
        </a>
        <a href="https://medium.com/@chinchincasinoapp_92641" className="text-dark" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-medium fa-lg"></i>
        </a>
        <a href="https://www.pinterest.com/chinchincasinoapp" className="text-dark" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-pinterest fa-lg"></i>
        </a>
        </div>
    </div>
    </footer>

    </>
   

  </React.StrictMode>,
)

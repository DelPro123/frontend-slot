import React from "react";

const Instruction = () => {
  return (
    <div className="container-fluid my-4 p-3">
      <h2 className="mb-4 text-center"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#ED58A3" className="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg>How to Use the Winning Meter</h2>
      <h3 className="mb-3"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#ED58A3" className="bi bi-check2-square" viewBox="0 0 16 16">
  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
</svg>Chinchin Casino App—Winning Meter Mechanics</h3>
                <p>
                    The Winning Meter is your personal guide to smarter gameplay across the morning, afternoon,
                    and night prediction sessions. It helps you decide the best time to place your bets based on
                    estimated winning rates of the games. The meter is divided into three distinct color zones:
                    red, orange, and green. Each represents a different chance of winning.
                </p>
      <div className="row">
         <div className="col-lg-4 col-sm-12">
            <div className="card bgcard p-3">
                  <h4 className="text-danger mt-4">🔴 Red Zone (Low Winning Rate—10% to 40%)</h4>
            <ul>
                <li>This zone indicates a low probability of winning.</li>
                <li>If the meter is red during a session, your chances are minimal.</li>
                <li>It's recommended to play with extra caution during this time.</li>
                <li>Great for risk-takers or players who prefer low-stakes bets.</li>
            </ul>
            <p>
                <strong>Example:</strong> If you're checking the morning session and see red, it means the
                prediction confidence is low—wins are less likely to occur.
            </p>
            </div>
        </div>
          <div className="col-lg-4 col-sm-12">
             <div className="card bgcard p-3">
                <h4 className="text-success mt-4">🟢 Green Zone (High Winning Rate—80% to 98%)</h4>
            <ul>
                <li>The green zone signals a high chance of winning.</li>
                <li>This is the best time to place your bets for maximum gain.</li>
                <li>Ideal for serious players or those waiting for a good opportunity.</li>
                <li>Confidence in predictions is at its highest in this zone.</li>
            </ul>
            <p>
                <strong>Example:</strong> A green meter for the night session means it's your golden
                window—play now to maximize your winning potential.
            </p>  
             </div>
        </div>
        <div className="col-lg-4 col-sm-12">
            <div className="card bgcard p-3">
                 <h4 className="text-warning mt-4">🟠 Orange Zone (Normal Winning Rate – 50% to 70%)</h4>
            <ul>
                <li>The orange zone shows a moderate or average chance of winning.</li>
                <li>This is a balanced zone, suitable for casual players.</li>
                <li>Not too risky, not too safe—perfect for testing your strategies.</li>
                <li>Recommended for players who want to stay active without high risk.</li>
            </ul>
            <p>
                <strong>Example:</strong> If you see the meter in orange for the afternoon session, your
                odds are fair. You may consider betting with a moderate amount.
            </p>
            </div>
        </div>
      </div>
      

      <h3 className="mt-5"> <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#ED58A3" className="bi bi-check2-square" viewBox="0 0 16 16">
  <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z"/>
  <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0"/>
</svg>How to Use the Winning Meter</h3>
      <ul>
        <li>
          <strong>Check the Meter:</strong> Before making a prediction, look at the current color for morning, afternoon, or night.
        </li>
        <li>
          <strong>Match your strategy:</strong> Align your gameplay style with the zone (Red = Cautious, Orange = Balanced, Green = Aggressive).
        </li>
        <li>
          <strong>Play Smart:</strong> Use the meter to guide your bet amount and timing.
        </li>
      </ul>

      <div className="alert alert-info mt-4 text-center" role="alert">
        💡 <strong>Pro Tip:</strong> The Winning Meter updates in real-time based on prediction data.
        Always check the meter before playing for the best results and adjust your strategy
        accordingly.
      </div>
    </div>
  );
};

export default Instruction;

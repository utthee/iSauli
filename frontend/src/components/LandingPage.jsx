import React, { useState } from 'react';
import './LandingPage.css';

export default function LandingPage() {
  const [activeCard, setActiveCard] = useState(null);

  const handleReportItem = () => {
    setActiveCard('report');
    alert('Redirecting to Report Item page...');
  };

  const handleSurrenderItem = () => {
    setActiveCard('surrender');
    alert('Redirecting to Surrender Item page...');
  };

  return (
    <div className="landing-page">

      {/* Cards Container */}
      <div className="cards-container">
        {/* Report Lost Item Card */}
        <div className="card" onClick={handleReportItem}>
          <div className="card-header blue">
            <span className="icon"></span>
          </div>
          <div className="card-body">
            <h2>Report Lost Item</h2>
            <p>Lost something? Post details about your missing item here and help the community find it for you.</p>
            <button className="btn btn-blue">Report Now</button>
          </div>
        </div>

        {/* Surrender Found Item Card */}
        <div className="card" onClick={handleSurrenderItem}>
          <div className="card-header green">
            <span className="icon"></span>
          </div>
          <div className="card-body">
            <h2>Surrender Found Item</h2>
            <p>Found something? Submit details here and help us return it to its rightful owner.</p>
            <button className="btn btn-green">Submit Item</button>
          </div>
        </div>
      </div>
    </div>
  );
}
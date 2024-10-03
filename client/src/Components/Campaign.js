import React from 'react';
import fundraiserIcon from '../assets/images/fundraiser.png';
import donorIcon from '../assets/images/donor.png';

const Campaign = () => {
  return (
    <section className="campaign-options">
      <div className="option-card fundraiser">
        <div className="ficon">
          <img src={fundraiserIcon} alt="Fundraiser Icon" />
        </div>
        <h3>Fundraiser</h3>
        <p>We help you easily start your campaign and collect donations. You can manage your campaign updates and your supporters on the dashboard.</p>
        <button className="start-campaign-btn">Start a Campaign<img src="img/arrow.png" alt="arrow" /></button>
      </div>
      <div className="option-card donor">
        <div className="ficon">
          <img src={donorIcon} alt="Donor Icon" />
        </div>
        <h3>Donor</h3>
        <p>Help the campaigns achieve their goals. Make the world better by donating to spread good values to the community.</p>
        <button className="donate-now-btn">Donate Now<img src="img/arrow2.png" alt="arrow" /></button>
      </div>
    </section>
  );
};

export default Campaign;

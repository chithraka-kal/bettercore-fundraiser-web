import React from 'react';
import './App.css'; // Import the CSS file for styling

const AboutUs = () => {
  return (
    <div className="App">
      {/* About Us Section */}
      <div className="about-section">
        <div className="about-content">
          <div className="about-image">
            <img 
              src="https://img.freepik.com/free-vector/volunteers-collecting-goods-charity-into-huge-donation-box-donating-coins-into-jar-donation-charity-donation-funds-gift-kind-concept-pinkish-coral-bluevector-isolated-illustration_335657-1387.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726876800&semt=ais_hybrid" 
              alt="Charity Work Photo"
            />
          </div>
          <div className="about-description">
            <h1>About Us</h1>
            <p>
              Welcome to our Charity Donation Platform! We are committed to making a difference in the lives of those in need. 
              Our platform connects donors with trusted charities to ensure that your contributions reach the right people and make 
              a meaningful impact. We believe in transparency, compassion, and the power of giving. Together, we can create a 
              better world. Join us in making a positive change, one donation at a time.
            </p>
          </div>
        </div>
      </div>



       












      {/* Cards Section */}
      <div className="cards-section">
        <div className="card">
          <h2>WHAT WE DO</h2>
          <p>
          We connect donors with trusted, impactful charities. Our platform ensures that every contribution goes directly to those in need, supporting essential causes such as healthcare,
           education, and disaster relief. We simplify the donation process, offering a secure and transparent way to make a meaningful difference.
          </p>
        </div>
        <div className="card">
          <h2>WHY CHOOSE US</h2>
          <p>
          We prioritize transparency and accountability, providing detailed reports on how your donations are used. Our trusted network of charities ensures your funds create the greatest
         possible impact. With a user-friendly platform and a commitment to ethical giving, we make it easy to support the causes you care about.
          </p>
        </div>
        <div className="card">
          <h2>OUR MISSION</h2>
          <p>
          Our mission is to empower individuals and communities through charitable donations. We aim to alleviate suffering, promote education, and enhance healthcare for the most vulnerable.
           By connecting donors to life-changing initiatives, we strive to create a world where everyone has access to the resources they need to thrive.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="image">
        <img 
          src="https://averillsolutions.com/wp-content/uploads/2024/02/donor-retention_Large-CTA-1024x414.png" 
          
        />
      </div>



    
      <div className="contact-content">
          
          <div className="contact-description">
          
            
          
            <div class="contact-description">
            <ul>
            <li>E-Mail : charity@outlook.com</li>
            <li>Contact Number : +94-700111000</li>
            <li>Hot Line : 011-111000111</li>
            </ul>
            </div>
          </div>
          <div className="contact-image">
            <img 
              src="https://cdni.iconscout.com/illustration/premium/thumb/fundraising-charity-and-donation-illustration-download-in-svg-png-gif-file-formats--volunteer-pack-business-illustrations-8245793.png?f=webp" 
              alt="Charity Work Photo"
            />
          </div>
        </div>
      





    </div>
  );
};

export default AboutUs;

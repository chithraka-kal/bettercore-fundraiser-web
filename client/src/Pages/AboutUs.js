/* General Styles */

import React from 'react';
import './App.css'; // Import the CSS file for styling
import '@fortawesome/fontawesome-free/css/all.min.css'; 



const AboutUs = () => {
  return (
    <div className="App">
      {/* About Us Section */}
      <div className="about-section">
        <div className="about-content">
          <div className="about-image">
            <img 
              src="https://cdni.iconscout.com/illustration/premium/thumb/online-money-donation-illustration-download-in-svg-png-gif-file-formats--donate-box-financial-charity-pack-business-illustrations-4906982.png?f=webp"
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
      <div className="container">
        <div className="card">
        <img src="https://c0.wallpaperflare.com/preview/287/860/54/team-ethnicity-group-hands.jpg" alt="cheeta"/>
        <div class="intro">
          <h2>WHAT WE DO</h2>
          <p>
          We connect donors with trusted, impactful charities. Our platform ensures that every contribution goes directly to those in need, supporting essential causes such as healthcare,
           education, and disaster relief. We simplify the donation process, offering a secure and transparent way to make a meaningful difference.
          </p>
          </div> 
        </div>

        <div className="card">
        <img src="https://images.pexels.com/photos/3959485/pexels-photo-3959485.jpeg?cs=srgb&dl=pexels-brandaohh-3959485.jpg&fm=jpgs" alt="cheeta"/>
        <div class="intro">
          <h2>WHY CHOOSE US</h2>
          <p>
          We prioritize transparency and accountability, providing detailed reports on how your donations are used. Our trusted network of charities ensures your funds create the greatest
         possible impact. With a user-friendly platform and a commitment to ethical giving, we make it easy to support the causes you care about.
          </p>
        </div>
        </div>


        <div className="card">
        <img src="https://wallpaper.dog/large/10723931.jpg" alt="cheeta"/>
        <div class="intro">
          <h2>OUR MISSION</h2>
          <p>
          Our mission is to empower individuals and communities through charitable donations. We aim to alleviate suffering, promote education, and enhance healthcare for the most vulnerable.
           By connecting donors to life-changing initiatives, we strive to create a world where everyone has access to the resources they need to thrive.
          </p>
        </div>
        </div>

      </div>




    
      <div className="contact-content">
          
          <div className="contact-description">

            <div class="contact-description">
            <ul>
    <li>
      <i className="fas fa-envelope"></i> {/* Email icon */}
      E-Mail: charity@outlook.com
    </li>
    <li>
      <i className="fas fa-phone"></i> {/* Contact number icon */}
      Contact Number: +94-700111000
    </li>
    <li>
      <i className="fas fa-phone-volume"></i> {/* Hotline icon */}
      Hot Line: 011-111000111
    </li>
  </ul>
            </div>
          </div>
          <div className="contact-image">
            <img 
              src="https://cdni.iconscout.com/illustration/premium/thumb/charity-and-donation-illustration-download-in-svg-png-gif-file-formats--application-pack-miscellaneous-illustrations-2621398.png"
            />
          </div>
        </div>



    
             {/* Image Section */}
        <div className="image">
        <img 
          src="https://media.licdn.com/dms/image/C4E12AQE2pYHLYnVsqQ/article-cover_image-shrink_720_1280/0/1596219628608?e=2147483647&v=beta&t=X2uGdhP6w795e27fQzQ5SuPrLapHNCl3yfF3vDoDgIk" 
          alt="Donation Image"
        />
      </div>
    
    

    </div>

      
);
};
  

export default AboutUs;

  
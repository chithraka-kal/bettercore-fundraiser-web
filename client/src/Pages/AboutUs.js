import React from "react";
import Image1 from "../assets/images/AboutUs.jpeg";

function AboutUs() {
  return (
    <div className="container p-6 mx-auto bg-slate-200">
      <div className="flex flex-col items-center lg:flex-row lg:items-start">
        <div className="w-full lg:w-1/2">
          <img
            src={Image1}
            alt="About Us"
            className="object-cover w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        
        <div className="w-full mt-6 text-justify lg:w-1/2 lg:pl-10 lg:mt-0">
          <h1 className="mb-10 text-4xl font-bold text-center ">ABOUT US</h1>

          <p className="mb-4 text-lg ">
            <span className="font-bold">Welcome</span> to our Campaigns platform, where we unite passionate
            individuals and organizations to bring meaningful change to our
            communities. Our mission is to empower those in need by connecting
            them with donors who believe in their cause.
          </p>

          <p className="mb-4 text-lg">
            Whether it’s providing relief to natural disaster victims,
            supporting local schools, or launching innovative social projects,
            our platform allows campaigns to raise the funds and support
            necessary to make a real-world impact.
          </p>

          <h2 className="mt-6 mb-4 text-2xl font-semibold">Our Mission</h2>
          <p className="mb-4 text-lg">
            Our mission is simple: to create a platform where people can make a
            positive difference. We strive to make it easier for individuals and
            organizations to launch, promote, and fundraise for their campaigns,
            ensuring every cause gets the attention and support it deserves.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

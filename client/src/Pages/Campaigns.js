import React from "react";

function Campaigns({campaigns}) {
  return (
    <div className="my-10">
      <h2 className="text-xl font-semibold">Campaign List</h2>
      <ul className="space-y-4">
        {campaigns && campaigns.length > 0 ? (
          campaigns.map((campaign, index) => (
            <li key={index} className="p-4 bg-white border rounded-lg shadow-lg">
              <h3 className="text-lg font-bold">{campaign.name}</h3>
              <p>{campaign.description}</p>
              <p className="font-semibold">Goal: ${campaign.goal}</p>
              <p className="text-gray-500">Contact: {campaign.phoneNumber}</p>
              <button 
              type="submit" 
              className="px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-700">
                Donate Now
              </button>
            </li>
          ))
        ) : (
          <p>No campaigns available</p>
        )}
      </ul>
    </div>
  );
};

export default Campaigns;

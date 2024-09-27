import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Campaigns({ campaign }) {
  const [campaigns, setCampaigns] = useState([
    {
      name: "Help for Flood Victims",
      description:
        "A campaign to provide relief for those affected by the recent floods.",
      goal: 10000,
      phoneNumber: "1234567890",
    },
    {
      name: "Support Local Schools",
      description:
        "Raising funds to improve the infrastructure of local schools.",
      goal: 5000,
      phoneNumber: "0987654321",
    },
  ]);
  return (
    <div className="m-10">
      <h2 className="my-5 text-xl font-semibold">Campaign List</h2>
      <ul className="space-y-4">
        {campaigns && campaigns.length > 0 ? (
          campaigns.map((campaign, index) => (
            <li
              key={index}
              className="p-4 bg-white border rounded-lg shadow-lg"
            >
              <h3 className="text-lg font-bold">{campaign.name}</h3>
              <p>{campaign.description}</p>
              <p className="font-semibold">Goal: ${campaign.goal}</p>
              <p className="text-gray-500">Contact: {campaign.phoneNumber}</p>
              <button
                type="submit"
                className="px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-700"
              >
                Donate Now
              </button>
            </li>
          ))
        ) : (
          <p>No campaigns available</p>
        )}
      </ul>
      
      <div className="flex gap-3">
      <Link to="/campaigns/create">
          <button className="p-2 mt-5 text-white bg-blue-500 rounded-lg">
            Create Campaign
          </button>
        </Link>
        <Link to="/campaigns/mycampaigns">
          <button className="p-2 mt-5 text-white bg-blue-500 rounded-lg">
            My Campaigns
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Campaigns;

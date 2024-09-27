import React from "react";
import { useState } from "react";

function MyCampaigns() {
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

  const [campaignToEdit, setCampaignToEdit] = useState(null);

  const editCampaign = (index) => {
    setCampaignToEdit(index);
  };

  const deleteCampaign = (index) => {
    const updateCampaigns = campaigns.filter((c, i) => i !== index);
    setCampaigns(updateCampaigns);
  };
  return (
    <div>
      <div className="my-10 rounded-lg shadow-lg">
        <div>
            <h2 className="my-5 text-xl font-semibold">My Campaign List</h2>
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
                  <p className="text-gray-500">
                    Contact: {campaign.phoneNumber}
                  </p>
                  <div className="flex justify-end gap-4 mt-4">
                    <button
                      onClick={() => editCampaign(index)}
                      className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteCampaign(index)}
                      className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <p>No campaigns available</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MyCampaigns;

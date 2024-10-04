import React, { useEffect, useState } from "react";
import ViewCampaignModal from "./ViewCampaignModal"; // Updated import

const ManageCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);

  useEffect(() => {
    const fetchCampaigns = async () => {
      const mockCampaigns = [
        {
          id: 1,
          name: "Charity Fundraiser",
          organizer: "Sameera Jayakodi",
          description:
            "This is a charity fundraiser for underprivileged children.",
          donationValue: "5000 USD",
          status: "Active",
        },
        {
          id: 2,
          name: "Education Support",
          organizer: "Nipun Avishka",
          description: "Education support for rural areas.",
          donationValue: "3000 USD",
          status: "Completed",
        },
      ];
      setCampaigns(mockCampaigns);
    };

    fetchCampaigns();
  }, []);

  const handleViewCampaign = (campaign) => {
    setSelectedCampaign(campaign);
    setIsViewModalOpen(true);
  };

  const handlePayCampaignCreator = (campaignId) => {
    alert(`Paid campaign creator for campaign ID: ${campaignId}`);
  };

  return (
    <div className="p-10 bg-white rounded-lg shadow-lg">
      <h1 className="mb-6 text-3xl font-bold">Manage Campaigns</h1>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="text-red-600 bg-red-100">
          <tr>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">
              Campaign Name
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">
              Organizer
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">
              Status
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {campaigns.map((campaign) => (
            <tr key={campaign.id}>
              <td className="px-6 py-4 whitespace-nowrap">{campaign.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {campaign.organizer}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{campaign.status}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => handleViewCampaign(campaign)}
                  className="px-4 py-2 mr-2 font-semibold text-red-600 bg-white border border-red-600 rounded"
                >
                  View
                </button>
                <button
                  onClick={() => handlePayCampaignCreator(campaign.id)}
                  disabled={campaign.status === "Active"}
                  className={`px-4 py-2 font-semibold ${
                    campaign.status === "Active"
                      ? "text-white bg-gray-400 cursor-not-allowed"
                      : "text-white bg-green-500"
                  } rounded`}
                >
                  Pay Campaign Creator
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedCampaign && (
        <ViewCampaignModal
          isOpen={isViewModalOpen}
          onClose={() => setIsViewModalOpen(false)}
          campaign={selectedCampaign} // Pass the selected campaign for viewing
          onAccept={() => alert("Campaign Accepted")} // Add any accept logic here
        />
      )}
    </div>
  );
};

export default ManageCampaigns;

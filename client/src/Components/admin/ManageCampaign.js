import React, { useEffect, useState } from "react";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import EditCampaignModal from "./EditCampaignModal";

const ManageCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [campaignToDelete, setCampaignToDelete] = useState(null);

  useEffect(() => {
    const fetchCampaigns = async () => {
      const mockCampaigns = [
        {
          id: 1,
          name: "Charity Fundraiser",
          organizer: "Sameera Jayakodi",
          status: "Active",
        },
        {
          id: 2,
          name: "Education Support",
          organizer: "Nipun Avishka",
          status: "Completed",
        },
      ];
      setCampaigns(mockCampaigns);
    };

    fetchCampaigns();
  }, []);

  const handleEditCampaign = (campaign) => {
    setSelectedCampaign(campaign);
    setIsEditModalOpen(true);
  };

  const handleSaveCampaign = (updatedCampaign) => {
    setCampaigns(
      campaigns.map((campaign) =>
        campaign.id === updatedCampaign.id ? updatedCampaign : campaign
      )
    );
    setIsEditModalOpen(false);
  };

  const handleDeleteCampaign = (campaignId) => {
    setCampaignToDelete(campaignId);
    setIsDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    if (campaignToDelete) {
      setCampaigns(
        campaigns.filter((campaign) => campaign.id !== campaignToDelete)
      );
    }
    setIsDeleteModalOpen(false);
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
                  onClick={() => handleEditCampaign(campaign)}
                  className="px-4 py-2 mr-2 font-semibold text-red-600 bg-white border border-red-600 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteCampaign(campaign.id)}
                  className="px-4 py-2 mr-2 font-semibold text-white bg-red-500 rounded"
                >
                  Block
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
        <EditCampaignModal
          isOpen={isEditModalOpen}
          onClose={() => setIsEditModalOpen(false)}
          campaign={selectedCampaign}
          onSave={handleSaveCampaign}
        />
      )}

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default ManageCampaigns;

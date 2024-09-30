import React, { useEffect, useState } from "react";
import Modal from "react-modal";

const EditCampaignModal = ({ isOpen, onClose, campaign, onSave }) => {
  const [name, setName] = useState("");
  const [organizer, setOrganizer] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (campaign) {
      setName(campaign.name);
      setOrganizer(campaign.organizer);
      setStatus(campaign.status);
    }
  }, [campaign]);

  const handleSave = () => {
    const updatedCampaign = { ...campaign, name, organizer, status };
    onSave(updatedCampaign);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Edit Campaign"
      className="w-1/3 p-6 mx-auto mt-20 bg-white rounded-lg shadow-lg"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
    >
      <h2 className="mb-4 text-2xl font-bold text-red-600">Edit Campaign</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Campaign Name
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mt-1 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Organizer
        </label>
        <input
          type="text"
          value={organizer}
          onChange={(e) => setOrganizer(e.target.value)}
          className="w-full p-2 mt-1 border rounded"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Status
        </label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-2 mt-1 border rounded"
        >
          <option value="Active">Active</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="px-4 py-2 mr-2 text-gray-700 bg-gray-200 rounded"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="px-4 py-2 text-white bg-red-600 rounded"
        >
          Save
        </button>
      </div>
    </Modal>
  );
};

export default EditCampaignModal;

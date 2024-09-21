import React from "react";
import CampaignList from "../Components/Campaign/CampaignList";
import CampaignForm from "../Components/Campaign/CampaignForm";
import { useState } from "react";
import { server } from "../utils";

function Campaigns() {
  const [campaigns, setCampaigns] = useState([]);
  const [campaignToEdit, setCampaignToEdit] = useState(null);

  const addCampaign = async (campaign) => {
    if (campaignToEdit !== null) {
      const updateCampaigns = campaigns.map((c, index) =>
        index === campaignToEdit ? campaign : c
      );
      setCampaigns(updateCampaigns);
      setCampaignToEdit(null);
    } else {
      const data = new FormData();
      data.set("name", campaign.name);
      data.set("description", campaign.description);
      data.set("phone", campaign.phoneNumber);
      data.set("goal", campaign.goal);
      data.set("holder", campaign.bankDetails.accountHolderName);
      data.set("bankName", campaign.bankDetails.bankName);
      data.set("accNumber", campaign.bankDetails.accountNumber);
      data.set("swift", campaign.bankDetails.swiftCode);
      data.set("img", campaign.campaignImage);
      data.set("proof", campaign.proofLetter);
      await fetch(server + "campaign", {
        method: "POST",
        credentials: "include",
        body: data,
      }).catch((e) => console.log(e));
      setCampaigns([...campaigns, campaign]);
    }
  };

  const editCampaign = (index) => {
    setCampaignToEdit(index);
  };

  const deleteCampaign = (index) => {
    const updateCampaigns = campaigns.filter((c, i) => i !== index);
    setCampaigns(updateCampaigns);
  };

  return (
    <div className="container p-6 mx-auto">
      <CampaignForm
        onSubmit={addCampaign}
        campaign={campaignToEdit !== null ? campaigns[campaignToEdit] : null}
      />
      <CampaignList
        campaigns={campaigns}
        onEdit={editCampaign}
        onDelete={deleteCampaign}
      />
    </div>
  );
}

export default Campaigns;

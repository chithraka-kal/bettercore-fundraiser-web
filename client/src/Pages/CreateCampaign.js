import React from "react";
import CampaignForm from "../Components/Campaign/CampaignForm";
function CreateCampaign() {
  function onSubmit(campaign) {
    
  }
  return (
    <div>
      <CampaignForm onSubmit={onSubmit} editCampaign />
    </div>
  );
}

export default CreateCampaign;

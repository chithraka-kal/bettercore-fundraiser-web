import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { server } from "../utils";

function MyCampaigns() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch(server + "campaign/user", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setCampaigns(data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="my-10 px-6">
      <div>
        <h2 className="my-5 text-xl font-semibold">My Campaign List</h2>
        <ul className="space-y-4">
          {campaigns && campaigns.length > 0 ? (
            campaigns.map((campaign, index) => (
              <li
                key={campaign.id}
                className="p-4 bg-white border rounded-lg hover:shadow-lg duration-300 flex justify-between items-end"
              >
                <div>
                  <h3 className="text-lg font-bold">{campaign.name}</h3>
                  <p>{campaign.created}</p>
                  <p className="font-semibold">
                    Goal: ${campaign.goal.$numberDecimal}
                  </p>
                  <p className="text-gray-500">Contact: {campaign.phone}</p>
                </div>
                <div className="flex justify-end gap-4">
                  <Link
                    className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700"
                    to={`/campaigns/my/edit/${index}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-700"
                    to={`/campaigns/my/edit/${index}`}
                  >
                    Delete
                  </Link>
                </div>
              </li>
            ))
          ) : (
            <p>No campaigns available</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default MyCampaigns;

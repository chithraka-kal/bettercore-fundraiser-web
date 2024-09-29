import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const AdminDashboard = () => {
  const location = useLocation();

  // Determine if the current route is a nested route
  const isNestedRoute =
    location.pathname.includes("/admin/manage-campaigns") ||
    location.pathname.includes("/admin/manage-users") ||
    location.pathname.includes("/admin/edit-user");

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 h-screen text-white bg-[#AF1B3F]">
        {" "}
        {/* Updated color */}
        <div className="p-6 text-xl font-bold">Campaign Admin</div>
        <nav className="mt-10">
          <ul>
            <li className="p-4 hover:bg-gray-800">
              {" "}
              {/* Matching hover color */}
              <Link to="/admin/dashboard" className="font-medium text-white">
                Dashboard
              </Link>{" "}
              {/* Updated font */}
            </li>
            <li className="p-4 hover:bg-gray-800">
              <Link
                to="/admin/manage-campaigns"
                className="font-medium text-white"
              >
                Manage Campaigns
              </Link>
            </li>
            <li className="p-4 hover:bg-gray-800">
              <Link to="/admin/manage-users" className="font-medium text-white">
                Manage Users
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-3/4 h-screen p-10 bg-[#F9F2EC]">
        {" "}
        {/* Matching background */}
        {/* Conditionally render dashboard content */}
        {!isNestedRoute && (
          <>
            <h1 className="mb-6 text-3xl font-bold text-[#333]">
              Admin Dashboard
            </h1>{" "}
            {/* Updated text color */}
            {/* Related Cards */}
            <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-3">
              {/* Total Campaigns */}
              <div className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-[#AF1B3F]">
                {" "}
                {/* Border accent */}
                <h2 className="text-xl font-semibold text-[#333]">
                  Total Campaigns
                </h2>
                <p className="text-2xl font-bold text-[#AF1B3F]">15</p>{" "}
                {/* Primary color for number */}
              </div>

              {/* Total Users */}
              <div className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-[#AF1B3F]">
                <h2 className="text-xl font-semibold text-[#333]">
                  Total Users
                </h2>
                <p className="text-2xl font-bold text-[#AF1B3F]">300</p>
              </div>

              {/* Recent Donations */}
              <div className="p-6 bg-white rounded-lg shadow-lg border-l-4 border-[#AF1B3F]">
                <h2 className="text-xl font-semibold text-[#333]">
                  Recent Donations
                </h2>
                <ul className="mt-4">
                  <li className="text-sm text-[#555]">
                    Alice Johnson donated $100 to Campaign #8
                  </li>
                  <li className="text-sm text-[#555]">
                    Mark Wilson donated $50 to Campaign #3
                  </li>
                </ul>
              </div>
            </div>
          </>
        )}
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;

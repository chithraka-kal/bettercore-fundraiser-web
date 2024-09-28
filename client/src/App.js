import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import IndexPage from "./Pages/IndexPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Campaigns from "./Pages/Campaigns";
import { UserContextProvider } from "./context/UserContext";
import CreateCampaign from "./Pages/CreateCampaign";
import EditCampaign from "./Pages/EditCampaign";
import MyCampaigns from "./Pages/MyCampaigns";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/campaigns/my" element={<MyCampaigns />} />
          <Route path="/campaigns/my/create" element={<CreateCampaign />} />
          <Route path="/campaigns/my/edit/:id" element={<EditCampaign />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;

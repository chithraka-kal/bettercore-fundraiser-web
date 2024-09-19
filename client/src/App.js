import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import IndexPage from "./Pages/IndexPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Campaigns from "./Pages/Campaigns";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/campaigns" element={<Campaigns />} />
      </Route>
    </Routes>
  );
}

export default App;

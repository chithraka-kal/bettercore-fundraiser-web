import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import IndexPage from "./Pages/IndexPage";
import Layout from "./Components/Layout";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}

export default App;

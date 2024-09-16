import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import IndexPage from "./Pages/IndexPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { UserContextProvider } from "./context/UserContext";
function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;

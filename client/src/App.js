import { Route, Routes } from "react-router-dom";
import Login from "./Components/Auth/Login";
import IndexPage from "./Pages/IndexPage";
function App() {
  return (
    <>
      <Login />
      <Routes>
        <Route index element={<IndexPage />} />
      </Routes>
    </>
  );
}

export default App;

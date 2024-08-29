import { Routes, Route } from "react-router-dom";
import IndexPage from "./Pages/IndexPage";
function App() {
  return (
    <Routes>
      <Route index element={<IndexPage />} />
    </Routes>
  );
}

export default App;

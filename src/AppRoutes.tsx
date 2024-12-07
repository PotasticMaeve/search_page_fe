import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Detail from "./components/detail";
import Home from "./components/home";
import Layout from "./components/layout";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/job/:id" element={<Detail />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;

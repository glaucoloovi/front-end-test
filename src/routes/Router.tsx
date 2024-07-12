import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@components/layout";
import { IncomeProvider } from "src/modules/Incomes/context/IncomeContext";

const RouterConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<FixedIncomes />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default RouterConfig;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "@components/layout";
import { IncomeProvider } from "src/modules/Incomes/context/IncomeContext";
import FixedIncomes from "../modules/Incomes/pages/FixedIncome";

const RouterConfig = () => {
  return (
    <Router>
      <IncomeProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<FixedIncomes />} />
          </Route>
        </Routes>
      </IncomeProvider>
    </Router>
  );
};

export default RouterConfig;

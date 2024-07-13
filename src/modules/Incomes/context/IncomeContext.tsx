import { createContext, ReactNode, useEffect, useState } from "react";
import { IncomeService } from "src/service/Incomes/IncomeService";
import {
  dailyEquityByPortfolioChart,
  SnapshotByPortfolio,
  SnapshotByProduct,
} from "src/types/index";

interface IncomeContextType {
  portfolio: SnapshotByPortfolio;
  products: SnapshotByProduct[];
  portfolioChart?: dailyEquityByPortfolioChart[];
}

const defaultPortfolio: SnapshotByPortfolio = {
  equity: 0,
  equityProfit: 0,
  indexerValue: 0,
  percentageOverIndexer: 0,
  percentageProfit: 0,
  valueApplied: 0,
};

export const IncomeContext = createContext<IncomeContextType>({
  portfolio: defaultPortfolio,
  products: [],
});

export const IncomeProvider = ({ children }: { children: ReactNode }) => {
  const [portfolio, setPortfolio] =
    useState<SnapshotByPortfolio>(defaultPortfolio);
  const [products, setProducts] = useState<SnapshotByProduct[]>([]);
  const [portfolioChart, setPortfolioChart] = useState<
    dailyEquityByPortfolioChart[]
  >([]);

  useEffect(() => {
    const loadIncome = async () => {
      try {
        const fetchedIncome = await IncomeService.fetchIncomes();
        setPortfolio(fetchedIncome.snapshotByPortfolio);
        setProducts(fetchedIncome.snapshotByProduct);
        setPortfolioChart(fetchedIncome.dailyEquityByPortfolioChartData);
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      }
    };

    loadIncome();
  }, []);

  return (
    <IncomeContext.Provider value={{ portfolio, products, portfolioChart }}>
      {children}
    </IncomeContext.Provider>
  );
};

import {
  dailyEquityByPortfolioChart,
  SnapshotByPortfolio,
  SnapshotByProduct,
} from "src/types/index";

export interface IncomeFetchResponse {
  dailyEquityByPortfolioChartData: dailyEquityByPortfolioChart[];
  snapshotByPortfolio: SnapshotByPortfolio;
  snapshotByProduct: SnapshotByProduct[];
}

export interface SnapshotByPortfolio {
  equity: number;
  equityProfit: number;
  indexerValue: number;
  percentageOverIndexer: number;
  percentageProfit: number;
  valueApplied: number;
}

export interface SnapshotByProduct {
  due: Due;
  fixedIncome: FixedIncome;
  hasBalance: number;
  position: Position;
  productHasQuotation: number;
}

export interface dailyEquityByPortfolioChart {
  correctedQuota: number;
  dailyReferenceDate: number;
  movementTypeId: number;
  portfolioProductId: number;
  productName: string;
  value: number;
}

export interface Position {
  equity: number;
  indexerLabel: string;
  indexerValue: number;
  percentageOverIndexer: number;
  portfolioPercentage: number;
  profitability: number;
  valueApplied: number;
}

export interface FixedIncome {
  bondType: string;
  name: string;
  portfolioProductId?: string;
}

export interface Due {
  date: string;
  daysUntilExpiration: number;
}

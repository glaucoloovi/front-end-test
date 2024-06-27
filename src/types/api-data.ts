export type APIData = {
  success: true
  data: {
    snapshotByPortfolio: {
      equity: number
      valueApplied: number
      equityProfit: number
      percentageProfit: number
      indexerValue: number
      percentageOverIndexer: number
    }
    dailyEquityByPortfolioChartData: [
      {
        correctedQuota: number
        dailyReferenceDate: number
        movementTypeId: number
        portfolioProductId: number
        productName: string
        value: number
      },
    ]
    snapshotByProduct: [
      {
        due: {
          date: string
          daysUntilExpiration: number
        }
        fixedIncome: {
          bondType: string
          name: string
          portfolioProductId: number
        }
        hasBalance: number
        position: {
          equity: number
          indexerLabel: string
          indexerValue: number
          percentageOverIndexer: number
          portfolioPercentage: number
          profitability: number
          valueApplied: number
        }
        productHasQuotation: number
      },
    ]
  }
  error: null
}

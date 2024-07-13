import { render, waitFor } from "@testing-library/react";
import React from "react";
import mockIncomeData from "../mocks/response.json";
import {
  IncomeContext,
  IncomeProvider,
} from "src/modules/Incomes/context/IncomeContext";

jest.mock("../../service/Incomes/IncomeService", () => ({
  fetchIncomes: jest.fn().mockResolvedValue({
    data: mockIncomeData,
  }),
}));

const renderWithContext = (component: React.ReactNode) => {
  return render(<IncomeProvider>{component}</IncomeProvider>);
};

describe("IncomeProvider", () => {
  it("loads and provides fixed income data in the context", async () => {
    const { findByText } = renderWithContext(
      <IncomeContext.Consumer>
        {({ portfolio, products, portfolioChart }) => (
          <>
            <div>Equity: {portfolio.equity}</div>
            <div>Products count: {products.length}</div>
            <div>
              Chart data count: {portfolioChart ? portfolioChart.length : "0"}
            </div>
          </>
        )}
      </IncomeContext.Consumer>
    );

    await waitFor(() =>
      findByText(`Equity: ${mockIncomeData.data.snapshotByPortfolio.equity}`)
    );

    await findByText(
      `Products count: ${mockIncomeData.data.snapshotByProduct.length}`
    );

    await findByText(
      `Chart data count: ${mockIncomeData.data.dailyEquityByPortfolioChartData.length}`
    );
  });
});

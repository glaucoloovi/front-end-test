import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CardsDisplay from "src/modules/Incomes/pages/FixedIncome/components/CardsDisplay";
import { ThemeProvider } from "styled-components";
import theme from "src/theme/theme";
import { formatNumberToCurrency } from "@utils/numberUtils";

describe("CardsDisplay", () => {
  const mockProps = {
    totals: {
      equity: 100000,
      valueApplied: 80000,
      profitability: 12000,
      indexerValue: 1500,
      percentageOverIndexer: 0.8,
    },
    result: 20000,
    productsCount: 10,
  };

  it("should render correctly", () => {
    render(
      <ThemeProvider theme={theme}>
        <CardsDisplay {...mockProps} />
      </ThemeProvider>
    );

    expect(screen.getByText("SALDO BRUTO")).toBeInTheDocument();
    expect(screen.getByText("Valor aplicado")).toBeInTheDocument();
    expect(screen.getByText("Resultado")).toBeInTheDocument();
    expect(screen.getByText("Rentabilidade")).toBeInTheDocument();
    expect(screen.getByText("CDI")).toBeInTheDocument();
    expect(screen.getByText("% sobre CDI")).toBeInTheDocument();

    const findByFormattedText = (content: string) =>
      screen.getByText((_, node) => {
        if (node === null || node.textContent === null) return false;
        const hasText = node.textContent === content;
        const childrenDontHaveText = Array.from(node.children).every(
          (child) => child.textContent !== content
        );
        return hasText && childrenDontHaveText;
      });

    expect(
      findByFormattedText(formatNumberToCurrency(mockProps.totals.equity))
    ).toBeInTheDocument();
    expect(
      findByFormattedText(formatNumberToCurrency(mockProps.totals.valueApplied))
    ).toBeInTheDocument();
    expect(
      findByFormattedText(formatNumberToCurrency(mockProps.result))
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        `${(mockProps.totals.profitability / mockProps.productsCount).toFixed(
          2
        )}%`
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        `${(mockProps.totals.indexerValue / mockProps.productsCount).toFixed(
          2
        )}%`
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        `${(
          mockProps.totals.percentageOverIndexer / mockProps.productsCount
        ).toFixed(0)}%`
      )
    ).toBeInTheDocument();
  });
});

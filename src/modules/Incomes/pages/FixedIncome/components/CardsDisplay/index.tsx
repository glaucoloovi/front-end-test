import React from "react";

import { formatNumberToCurrency } from "@utils/numberUtils";
import { Card, CardsContainer } from "./styles";

interface CardsDisplayProps {
  totals: {
    equity: number;
    valueApplied: number;
    profitability: number;
    indexerValue: number;
    percentageOverIndexer: number;
  };
  result: number;
  productsCount: number;
}

const CardsDisplay: React.FC<CardsDisplayProps> = ({
  totals,
  result,
  productsCount,
}) => {
  return (
    <CardsContainer>
      <Card>
        <span>SALDO BRUTO</span>
        <strong>{formatNumberToCurrency(totals.equity)}</strong>
      </Card>
      <Card>
        <span>Valor aplicado</span>
        <strong>{formatNumberToCurrency(totals.valueApplied)}</strong>
      </Card>
      <Card>
        <span>Resultado</span>
        <strong>{formatNumberToCurrency(result)}</strong>
      </Card>
      <Card>
        <span>Rentabilidade</span>
        <strong>{(totals.profitability / productsCount).toFixed(2)}%</strong>
      </Card>
      <Card>
        <span>CDI</span>
        <strong>{(totals.indexerValue / productsCount).toFixed(2)}%</strong>
      </Card>
      <Card>
        <span>% sobre CDI</span>
        <strong>
          {(totals.percentageOverIndexer / productsCount).toFixed(0)}%
        </strong>
      </Card>
    </CardsContainer>
  );
};

export default CardsDisplay;

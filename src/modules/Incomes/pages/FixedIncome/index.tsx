import { useContext, useMemo } from "react";

import { Container, Ativo } from "./styles";
import { IncomeContext } from "../../context/IncomeContext";

const FixedIncomes: React.FC = () => {
  const { products } = useContext(IncomeContext);
  const { totals, result } = useMemo(() => {
    const totals = products.reduce(
      (acc, product) => {
        acc.equity += product.position.equity;
        acc.valueApplied += product.position.valueApplied;
        acc.profitability += product.position.profitability;
        acc.indexerValue += product.position.indexerValue;
        acc.percentageOverIndexer += product.position.percentageOverIndexer;
        return acc;
      },
      {
        equity: 0,
        valueApplied: 0,
        profitability: 0,
        indexerValue: 0,
        percentageOverIndexer: 0,
      }
    );
    const result = totals.equity - totals.valueApplied;

    return { totals, result };
  }, [products]);

  return (
    <Container>
      <Ativo>Renda Fixa</Ativo>
    </Container>
  );
};

export default FixedIncomes;

import {
  Container,
  Card,
  Row,
  Title,
  Label,
  FiltersConteiner,
  Filters,
  FixedInfos,
  FixedResults,
  MaturityInvestment,
  PaginationContainer,
  Select,
  Input,
  SearchIcon,
  InputContainer,
} from "./styles";
import { formatNumberToCurrency } from "@utils/numberUtils";
import { FaExclamationCircle } from "react-icons/fa";
import { useState } from "react";
import { SnapshotByProduct } from "src/types/index";
import useFilterAndSort from "src/hooks/useFilterAndSort";
import Button from "@components/ButtonComponent/ButtonComponent";

interface FixedIncomeDetailsProps {
  Investment: SnapshotByProduct[];
}

const FixedIncomeDetails: React.FC<FixedIncomeDetailsProps> = ({
  Investment,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { filteredAndSortedItems, setFilter, setSortBy } =
    useFilterAndSort(Investment);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(filteredAndSortedItems.length / itemsPerPage);

  const currentItems = filteredAndSortedItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const paginationButtons = Array.from({ length: totalPages }, (_, index) => (
    <Button
      key={index + 1}
      onClick={() => setCurrentPage(index + 1)}
      disabled={currentPage === index + 1}
    >
      {index + 1}
    </Button>
  ));
  return (
    <Container>
      <FiltersConteiner>
        <h2>Minhas Renda Fixas</h2>

        <Filters>
          <Select onChange={(e) => setSortBy(e.target.value)}>
            <option value="">Ordenar por</option>
            <option value="valueApplied">Valor Investido</option>
            <option value="equity">Saldo Bruto</option>
            <option value="dueDate">Data de Vencimento</option>
          </Select>
          <InputContainer>
            <Input type="text" onChange={(e) => setFilter(e.target.value)} />
            <SearchIcon />
          </InputContainer>
        </Filters>
      </FiltersConteiner>

      {currentItems.map((item, index) => (
        <Card key={index}>
          <Row>
            <Title>
              Titulo <FaExclamationCircle size={12} color="#646464" />
            </Title>
            <FixedInfos>
              <Label>{item.fixedIncome.name}</Label>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Title>Classe</Title>
                <Label color="#a979e2">{item.fixedIncome.bondType}</Label>
              </div>
            </FixedInfos>
          </Row>
          <Row>
            <Title>
              resultado <FaExclamationCircle size={12} color="#646464" />
            </Title>
            <FixedResults>
              <Label color="#50c68ff3">
                <Title>Valor Invest.</Title>
                {formatNumberToCurrency(item.position.valueApplied)}
              </Label>
              <Label color="#50c68ff3">
                <Title>Saldo Bruto.</Title>
                {formatNumberToCurrency(item.position.equity)}
              </Label>
              <Label color="#50c68ff3">
                <Title>Rent.</Title>
                {item.position.profitability.toFixed(2)}%
              </Label>
              <Label color="#50c68ff3">
                <Title>% da Cart.</Title>
                {item.position.portfolioPercentage.toFixed(2)}%
              </Label>
              <Label color="#50c68ff3">
                <Title>CDI.</Title>
                {item.position.indexerValue.toFixed(2)}%
              </Label>
              <Label color="#50c68ff3">
                <Title>Sobre CDI.</Title>
                {item.position.percentageOverIndexer.toFixed(2)}%
              </Label>
            </FixedResults>
          </Row>
          <Row>
            <Title>
              resultado <FaExclamationCircle size={12} color="#646464" />
            </Title>
            <MaturityInvestment>
              <Label color="#00b4fb">
                <Title>Data Venc.</Title>
                {item.due.date}
              </Label>
              <Label color="#00b4fb">
                <Title>Dias até venc.</Title>
                {item.due.daysUntilExpiration}
              </Label>
            </MaturityInvestment>
          </Row>
        </Card>
      ))}
      <PaginationContainer>{paginationButtons}</PaginationContainer>
    </Container>
  );
};

export default FixedIncomeDetails;

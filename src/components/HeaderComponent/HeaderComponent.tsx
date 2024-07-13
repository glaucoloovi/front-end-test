import React, { useContext, useState } from "react";

import {
  Container,
  NavItem,
  NavWrapper,
  MobileMenuButton,
  Logo,
  Title,
  Value,
  IconWrapper,
  Content,
} from "./styles";
import { IoMenuOutline } from "react-icons/io5";
import { IncomeContext } from "src/modules/Incomes/context/IncomeContext";
import { formatNumberToCurrency } from "@utils/numberUtils";
import { FaArrowUp, FaBalanceScale, FaWallet } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

const HeaderComponent: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { portfolio } = useContext(IncomeContext);

  return (
    <Container id="header">
      <MobileMenuButton onClick={() => setMenuOpen(!isMenuOpen)}>
        <IoMenuOutline color="white" size={40} />
      </MobileMenuButton>
      <Logo>
        kinvo<span>premium</span>
      </Logo>
      <NavWrapper>
        <NavItem>
          <IconWrapper>
            <FaBalanceScale size={30} color="gray" />
          </IconWrapper>
          <Content>
            <Title>SALDO BRUTO</Title>
            <Value>{formatNumberToCurrency(portfolio.equityProfit)}</Value>
          </Content>
        </NavItem>
        <NavItem>
          <IconWrapper>
            <FaArrowUp size={30} color="white" />
          </IconWrapper>
          <Content>
            <Title>VALOR APLICADO</Title>
            <Value>{formatNumberToCurrency(portfolio.valueApplied)}</Value>
          </Content>
        </NavItem>
        <NavItem>
          <IconWrapper>
            <FaArrowTrendUp size={30} color="white" />
          </IconWrapper>
          <Content>
            <Title>RENTABILIDADE</Title>
            <Value>{portfolio.percentageProfit}%</Value>
          </Content>
        </NavItem>
        <NavItem>
          <FaWallet size={30} color="#6001d2" />
          <Content>
            <Title>CARTEIRA</Title>
            <Value>Minha Carteira</Value>
          </Content>
        </NavItem>
      </NavWrapper>
    </Container>
  );
};
export default HeaderComponent;

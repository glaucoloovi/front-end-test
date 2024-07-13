import React from "react";
import {
  FaBox,
  FaMoneyBillWave,
  FaChartBar,
  FaChartPie,
  FaBalanceScale,
} from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IconType } from "react-icons";
import { RiArrowDropRightLine } from "react-icons/ri";
import {
  Container,
  Dot,
  LinkItem,
  SidebarContainer,
  SubContainer,
  UserImage,
  UserName,
  UserProfile,
} from "./styles";
import user from "src/assets/gabriel.jpg";

interface Link {
  icon: IconType;
  label: string;
  sublinks: string[];
}
const iconStyle: React.CSSProperties = {
  background: "#ced1d7",
  borderRadius: "50%",
  padding: "4px",
  color: "white",
};

const links = [
  { icon: FaBalanceScale, label: "Resumo da Carteira", sublinks: [] },
  { icon: FaBox, label: "Meus Produtos", sublinks: [] },
  { icon: FaMoneyBillWave, label: "Meus Proventos", sublinks: [] },
  {
    icon: FaChartBar,
    label: "Classe de Ativos",
    sublinks: ["Ação", "Fundo", "Fundo Imobiliário", "Fundo Renda Fixa"],
  },
  { icon: FaArrowTrendUp, label: "Rentabilidade Real", sublinks: [] },
  { icon: FaChartPie, label: "Projeção da Carteira", sublinks: [] },
  { icon: FaBalanceScale, label: "Risco x Retorno", sublinks: [] },
];

const IconWithProps = ({
  icon,
  size = 24,
  ...props
}: {
  icon: IconType;
  style?: React.CSSProperties;
  size?: number;
}) => {
  const Icon = icon;
  return (
    <Icon {...props} size={size} style={{ ...iconStyle, ...props.style }} />
  );
};

const Sidebar: React.FC = () => (
  <SidebarContainer>
    <UserProfile>
      <UserImage src={user} alt="User profile" />
      <UserName>Gabriel Lucas (Pro)</UserName>
    </UserProfile>
    {links.map((link: Link, index) => (
      <Container key={index}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px",
          }}
        >
          <LinkItem key={index}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <IconWithProps
                icon={link.icon}
                size={30}
                style={{ marginRight: 8 }}
              />
              {link.label}
            </div>
          </LinkItem>
          <RiArrowDropRightLine size={30} color="#646464" />
        </div>
        {link.sublinks.map((sublink, subIndex) => (
          <SubContainer key={`${index}-${subIndex}`}>
            <LinkItem key={`${index}-${subIndex}`}>
              <Dot />
              {sublink}
            </LinkItem>
            <RiArrowDropRightLine size={30} color="#646464" />
          </SubContainer>
        ))}
      </Container>
    ))}
  </SidebarContainer>
);

export default Sidebar;

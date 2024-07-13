import styled from "styled-components";

import { devices, pxToRem } from "@utils/styles";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.colors.White};
  display: flex;
  justify-content: space-around;
  border-bottom: 2px solid ${({ theme }) => theme.colors.Neutrals0};
  padding: 24px;

  @media screen and (${devices.laptop}) {
    justify-content: space-between;
  }
`;

export const Logo = styled.h1`
  background-color: ${({ theme }) => theme.colors.White};
  font-size: 30px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.Purple};

  span {
    background-color: ${({ theme }) => theme.colors.White};
    font-weight: 300;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const NavWrapper = styled.nav`
  background-color: ${({ theme }) => theme.colors.White};
  display: flex;
  align-items: center;
  gap: 2rem;

  @media screen and (${devices.laptop}) {
    display: none;
  }
`;

export const NavItem = styled.div`
  background-color: ${({ theme }) => theme.colors.White};
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.White};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.p`
  background-color: ${({ theme }) => theme.colors.White};
  text-decoration: none;
  font-size: ${pxToRem(10)};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray};
`;

export const IconWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.Neutrals0};
  border-radius: 50%;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Value = styled.h2`
  background-color: ${({ theme }) => theme.colors.White};
  font-size: ${pxToRem(18)};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.gray200};
`;

export const MobileMenuButton = styled.button`
  background-color: ${({ theme }) => theme.colors.Purple};
  display: none;
  border: none;
  cursor: pointer;

  @media screen and (${devices.laptop}) {
    display: block;
  }
`;

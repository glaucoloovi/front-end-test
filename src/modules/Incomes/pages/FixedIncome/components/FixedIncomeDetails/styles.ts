import { devices, pxToRem } from "@utils/styles";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.White};
  border-radius: 20px;
  margin-top: 1rem;
`;

export const FiltersConteiner = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.Neutrals0};
  padding: 8px;
  h2 {
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const Filters = styled.div`
  display: flex;
  gap: 16px;
`;

export const InputContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const SearchIcon = styled(FaSearch)`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  color: #ccc;
  font-size: 16px;
`;

export const Input = styled.input`
  padding: 8px 12px;
  border: 2px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 16px;
  color: #333;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const Select = styled.select`
  padding: 8px 12px;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  color: #333;
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.White};
  border-bottom: 1px solid ${({ theme }) => theme.colors.Neutrals0};
  display: flex;
  width: 100%;
  gap: 16px;
  padding: 8px;

  justify-content: space-evenly;

  @media screen and (${devices.laptopL}) {
    flex-direction: column;
    min-height: 300px;
  }
`;
export const Row = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.Neutrals0};
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 8px;
  padding: 16px;
  gap: 16px;
`;

export const FixedInfos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`;

export const FixedResults = styled.div`
  display: flex;
  gap: 24px;
`;

export const MaturityInvestment = styled.div`
  display: flex;
  gap: 24px;
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.gray200};
  font-size: ${pxToRem(12)};
`;

export const Label = styled.div<{ color?: string }>`
  max-width: 250px;
  font-size: 16px;
  color: ${({ color, theme }) => color || theme.colors.gray200};
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

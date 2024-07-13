import styled from "styled-components";

export const CardsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 16%;
  padding: 20px;
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 14px;
    color: #666;
  }

  strong {
    font-size: 16px;
    color: ${(props) => props.theme.colors.Purple};
  }
`;

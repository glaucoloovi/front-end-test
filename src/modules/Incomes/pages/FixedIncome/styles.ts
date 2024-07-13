import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 24px;
`;

export const Ativo = styled.h2`
  color: ${(props) => props.theme.colors.Purple};
`;

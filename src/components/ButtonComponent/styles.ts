import styled from "styled-components";

interface StyledButtonProps {
  disabled: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  border: 1px solid #ccc;
  background-color: ${({ disabled }) => (disabled ? "#ddd" : "transparent")};
  color: #666;
  text-align: center;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;

  &:disabled {
    color: #999;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #eee;
  }
`;

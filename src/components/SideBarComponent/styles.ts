import styled from "styled-components";

export const Dot = styled.span`
  height: 8px;
  width: 8px;
  background-color: ${({ theme }) => theme.colors.Purple};
  border-radius: 50%;
  display: inline-block;
  margin-right: 10px;
`;

export const Container = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.Neutrals0};
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.Neutrals0};
`;

export const UserProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.Neutrals0};
`;

export const UserImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 8px;
`;

export const UserName = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 16px;
  font-weight: bold;
  margin-top: 8px;
`;

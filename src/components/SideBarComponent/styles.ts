import styled from "styled-components";

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border-right: 2px solid ${({ theme }) => theme.colors.Neutrals0};
`;

export const LinkItem = styled.div`
  height: 100%;
  color: ${({ theme }) => theme.colors.gray200};
  font-size: ${({ theme }) => theme.fonts.styles[14]};
`;

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
  justify-content: space-between;
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
  font-size: ${({ theme }) => theme.fonts.styles[16]};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  margin-top: 8px;
`;

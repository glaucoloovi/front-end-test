'use client'

import styled from 'styled-components'

export const StyledResumeCard = styled.div`
  width: 100%;
  box-shadow: ${({ theme }) => theme.shadow['shadow-2']};
  border-radius: ${({ theme }) => theme.radius.lg};
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) =>
    `${theme.spacing['spacing-10']} ${theme.spacing['spacing-8']}`};

  & .content {
    padding-left: ${({ theme }) => theme.spacing['spacing-10']};
    border-left: 2px solid ${({ theme }) => theme.colors['gray-1']};
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${({ theme }) => theme.spacing['spacing-4']};

    & .label {
      font-size: ${({ theme }) => theme.typography.xxs.size};
      line-height: ${({ theme }) => theme.typography.xxs.lineHeight};
      font-weight: ${({ theme }) => theme.typography.weight.medium};
      color: ${({ theme }) => theme.colors['gray-2']};
    }

    & .value {
      font-size: ${({ theme }) => theme.typography.sm.size};
      line-height: ${({ theme }) => theme.typography.sm.lineHeight};
      color: ${({ theme }) => theme.colors['purple-2']};
    }
  }
`

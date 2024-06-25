'use client'

import styled from 'styled-components'

export const StyledIncomeCard = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.spacing['spacing-8']};
  border: 1px solid ${({ theme }) => theme.colors['gray-1']};
  border-radius: ${({ theme }) => theme.radius.lg};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['spacing-16']};

  & .label {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing['spacing-8']};
    font-size: ${({ theme }) => theme.typography.xxs.size};
    line-height: ${({ theme }) => theme.typography.xxs.lineHeight};
    font-weight: ${({ theme }) => theme.typography.weight.medium};
    color: ${({ theme }) => theme.colors['gray-2']};
  }
`

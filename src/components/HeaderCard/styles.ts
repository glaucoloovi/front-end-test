'use client'

import styled from 'styled-components'

export const StyledHeaderCard = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing['spacing-10']};

  & .icon {
    width: ${({ theme }) => theme.spacing['spacing-30']};
    height: ${({ theme }) => theme.spacing['spacing-30']};
    border-radius: ${({ theme }) => theme.radius.circle};
    background-color: ${({ theme }) => theme.colors['gray-1']};
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .content {
    color: ${({ theme }) => theme.colors['gray-2']};

    & .label {
      font-size: ${({ theme }) => theme.typography.xxs.size};
      line-height: ${({ theme }) => theme.typography.xxs.lineHeight};
      text-transform: uppercase;
    }
  }
`

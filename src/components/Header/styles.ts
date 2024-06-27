'use client'

import styled from 'styled-components'

export const StyledHeader = styled.header`
  padding: ${({ theme }) => theme.spacing['spacing-30']};
  display: flex;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow['shadow-1']};

  & .card-group {
    display: flex;
    gap: ${({ theme }) => theme.spacing['spacing-30']};
    margin-left: auto;

    &:last-child {
      margin-left: ${({ theme }) => theme.spacing['spacing-30']};
    }

    & .skeleton {
      height: 2.4375rem;
      width: 6.25rem;
    }
  }
`

export const StyledHeaderButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing['spacing-10']};

  & .icon {
    width: ${({ theme }) => theme.spacing['spacing-30']};
    height: ${({ theme }) => theme.spacing['spacing-30']};
    border-radius: ${({ theme }) => theme.radius.circle};
    background-color: ${({ theme }) => theme.colors['purple-1']};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.25s;
  }

  & .content {
    color: ${({ theme }) => theme.colors['gray-2']};

    & .label {
      font-size: ${({ theme }) => theme.typography.xxs.size};
      line-height: ${({ theme }) => theme.typography.xxs.lineHeight};
      font-weight: ${({ theme }) => theme.typography.weight.bold};
    }
  }

  &:hover {
    & .icon {
      opacity: 0.9;
    }
  }
`

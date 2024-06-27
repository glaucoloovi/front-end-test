'use client'

import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
`

export const StyledMain = styled.main`
  width: 100%;
  padding: ${({ theme }) =>
    `${theme.spacing['spacing-32']} ${theme.spacing['spacing-20']}`};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing['spacing-24']};

  & .title {
    font-size: ${({ theme }) => theme.typography.xl.size};
    line-height: ${({ theme }) => theme.typography.xl.lineHeight};
    color: ${({ theme }) => theme.colors['purple-2']};
  }

  & .resume-card-group {
    display: grid;
    gap: ${({ theme }) => theme.spacing['spacing-10']};
    grid-template-columns: repeat(6, 1fr);
  }

  & .my-incomes-group {
    background-color: ${({ theme }) => theme.colors.white};
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing['spacing-16']};
    border-radius: ${({ theme }) => theme.radius.lg};
    box-shadow: ${({ theme }) => theme.shadow['shadow-2']};
    padding-bottom: ${({ theme }) => theme.spacing['spacing-16']};

    & .header {
      padding: ${({ theme }) => theme.spacing['spacing-16']};
      display: flex;
      justify-content: space-between;

      & .filters {
        display: flex;
        gap: ${({ theme }) => theme.spacing['spacing-16']};

        & > * {
          min-width: 15rem;
        }
      }

      & .label {
        font-size: ${({ theme }) => theme.typography.lg.size};
        line-height: ${({ theme }) => theme.typography.lg.lineHeight};
        font-weight: ${({ theme }) => theme.typography.weight.medium};
        color: ${({ theme }) => theme.colors['gray-2']};
      }
    }

    & .incomes {
      display: flex;
      flex-direction: column;

      & .incomes-group {
        padding: ${({ theme }) => theme.spacing['spacing-16']};
        display: grid;
        gap: ${({ theme }) => theme.spacing['spacing-10']};
        grid-template-columns: repeat(2, 2fr) 1fr;
        border-bottom: 1px solid ${({ theme }) => theme.colors['gray-5']};
        position: relative;

        &:nth-child(even) {
          background-color: ${({ theme }) => theme.colors['gray-4']};
        }

        & .rescued-product {
          position: absolute;
          top: ${({ theme }) => theme.spacing['spacing-4']};
          left: ${({ theme }) => theme.spacing['spacing-20']};
          font-size: ${({ theme }) => theme.typography.xxs.size};
          line-height: ${({ theme }) => theme.typography.xxs.lineHeight};
          color: ${({ theme }) => theme.colors['gray-2']};
        }
      }
    }
  }
  & .pie-chart-group {
    display: flex;
    gap: ${({ theme }) => theme.spacing['spacing-10']};
  }
`

export const StyledIncomeCardContent = styled.div<{
  $variant: 'default' | 'primary' | 'secondary'
}>`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing['spacing-16']};

  & .description {
    font-size: ${({ theme }) => theme.typography.xs.size};
    line-height: ${({ theme }) => theme.typography.sm.lineHeight};
    font-weight: ${({ theme }) => theme.typography.weight.medium};
    color: ${({ theme }) => theme.colors['gray-2']};
    width: 50%;
  }

  & .content-wrapper {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing['spacing-4']};

    & .content-wrapper-label {
      font-size: ${({ theme }) => theme.typography.xxs.size};
      line-height: ${({ theme }) => theme.typography.xxs.lineHeight};
      font-weight: ${({ theme }) => theme.typography.weight.medium};
      color: ${({ theme }) => theme.colors['gray-2']};
    }

    & .content-wrapper-value {
      font-size: ${({ theme }) => theme.typography.sm.size};
      line-height: ${({ theme }) => theme.typography.sm.lineHeight};
      font-weight: ${({ theme }) => theme.typography.weight.medium};
      color: ${({ theme }) => theme.colors['purple-2']};

      ${({ $variant, theme }) =>
        $variant === 'primary' &&
        `
        color: ${theme.colors['green-1']};
      `}

      ${({ $variant, theme }) =>
        $variant === 'secondary' &&
        `
        color: ${theme.colors['blue-1']};
      `}
    }
  }
`

'use client'

import * as Select from '@radix-ui/react-select'
import styled from 'styled-components'

export const StyledSelectTrigger = styled(Select.Trigger)`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.spacing['spacing-32']};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) =>
    `${theme.spacing['spacing-8']} ${theme.spacing['spacing-10']}`};
  border: 1px solid ${({ theme }) => theme.colors['gray-1']};
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.xs.size};
  line-height: ${({ theme }) => theme.typography.xs.lineHeight};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  color: ${({ theme }) => theme.colors['gray-2']};

  & > svg {
    width: 0.75rem;
    height: 0.75rem;

    & > path {
      stroke: ${({ theme }) => theme.colors['gray-2']};
    }
  }
`

export const StyledSelectContent = styled(Select.Content)`
  position: relative;
  z-index: 2;
  max-height: 10rem;
  min-width: ${({ theme }) => theme.spacing['spacing-8']};
  overflow: hidden;
  padding: ${({ theme }) =>
    `${theme.spacing['spacing-8']} ${theme.spacing['spacing-10']}`};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors['gray-1']};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadow['shadow-2']};
`

export const StyledSelectItem = styled(Select.Item)`
  position: relative;
  display: flex;
  width: 100%;
  cursor: default;
  user-select: none;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) => theme.spacing['spacing-8']};
  font-size: ${({ theme }) => theme.typography.xs.size};
  line-height: ${({ theme }) => theme.typography.xs.lineHeight};
  outline: none;
  background-color: ${({ theme }) => theme.colors.white};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors['gray-4']};
  }
`

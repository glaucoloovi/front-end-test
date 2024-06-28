'use client'

import Link from 'next/link'
import styled from 'styled-components'

export const StyledAsideSubMenuItem = styled(Link)<{ $isActive: boolean }>`
  padding: ${({ theme }) =>
    `${theme.spacing['spacing-16']} ${theme.spacing['spacing-20']}`};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing['spacing-10']};
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors['gray-4'] : theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors['gray-3']};
  font-size: ${({ theme }) => theme.typography.sm.size};
  line-height: ${({ theme }) => theme.typography.sm.lineHeight};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  color: ${({ theme }) => theme.colors['gray-2']};
  transition: background-color 0.25s;
  position: relative;

  & .badge {
    width: 0.375rem;
    height: 0.375rem;
    border-radius: ${({ theme }) => theme.radius.circle};
    background-color: ${({ theme }) => theme.colors['purple-2']};
  }

  & .icon {
    position: absolute;
    right: ${({ theme }) => theme.spacing['spacing-16']};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors['gray-4']};
  }
`

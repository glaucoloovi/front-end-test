'use client'

import Link from 'next/link'
import styled from 'styled-components'

export const StyledAsideMenuItem = styled(Link)<{ $isActive: boolean }>`
  padding: ${({ theme }) => theme.spacing['spacing-16']};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing['spacing-14']};
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors['gray-4'] : theme.colors.white};
  border-bottom: 1px solid ${({ theme }) => theme.colors['gray-3']};
  font-size: ${({ theme }) => theme.typography.sm.size};
  line-height: ${({ theme }) => theme.typography.sm.lineHeight};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  color: ${({ theme }) => theme.colors['gray-2']};
  transition: background-color 0.25s;
  position: relative;

  & .badge-icon {
    width: 2.125rem;
    height: 2.125rem;
    display: flex;
    align-items: center;
    justify-content: center;
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

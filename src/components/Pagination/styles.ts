'use client'

import Link from 'next/link'
import styled from 'styled-components'

export const StyledPagination = styled.nav`
  margin: 0 auto;
  display: flex;
  width: 100%;
  justify-content: center;
`

export const StyledPaginationContent = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing['spacing-10']};
`

export const StyledPaginationLink = styled(Link)<{ $isActive?: boolean }>`
  width: ${({ theme }) => theme.spacing['spacing-32']};
  height: ${({ theme }) => theme.spacing['spacing-32']};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors['gray-1']};
  background-color: ${({ theme, $isActive }) =>
    $isActive ? theme.colors['gray-1'] : theme.colors.white};
  font-size: ${({ theme }) => theme.typography.xs.size};
  line-height: ${({ theme }) => theme.typography.xs.lineHeight};
  font-weight: ${({ $isActive, theme }) =>
    $isActive ? theme.typography.weight.bold : theme.typography.weight.regular};
  color: ${({ theme }) => theme.colors['gray-2']};

  & .left-version {
    transform: rotate(180deg);
  }
`

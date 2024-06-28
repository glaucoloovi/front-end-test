'use client'

import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  & .icon {
    position: absolute;
    left: ${({ theme }) => theme.spacing['spacing-10']};
  }
`

export const StyledInput = styled.input`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${({ theme }) => theme.spacing['spacing-32']};
  border-radius: ${({ theme }) => theme.radius.lg};
  padding: ${({ theme }) =>
    `${theme.spacing['spacing-8']} ${theme.spacing['spacing-10']} ${theme.spacing['spacing-8']} ${theme.spacing['spacing-32']}`};
  border: 1px solid ${({ theme }) => theme.colors['gray-1']};
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.typography.xs.size};
  line-height: ${({ theme }) => theme.typography.xs.lineHeight};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  color: ${({ theme }) => theme.colors['gray-2']};
  outline: none;
`

'use client'

import styled from 'styled-components'

export const StyledPieChart = styled.div`
  padding: ${({ theme }) => theme.spacing['spacing-16']};
  border-radius: ${({ theme }) => theme.radius.lg};
  background-color: ${({ theme }) => theme.colors.white};
  width: 50%;
  height: 27rem;

  & .skeleton {
    height: 100%;
  }
`

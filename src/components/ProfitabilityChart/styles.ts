'use client'

import styled from 'styled-components'

export const StyledProfitabilityChart = styled.div`
  padding: ${({ theme }) => theme.spacing['spacing-16']};
  border-radius: ${({ theme }) => theme.radius.lg};
  background-color: ${({ theme }) => theme.colors.white};
  height: 27rem;

  & .skeleton {
    height: 100%;
    width: 100%;
  }
`

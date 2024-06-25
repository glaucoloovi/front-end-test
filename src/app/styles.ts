'use client'

import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
`

export const StyledMain = styled.main`
  padding: ${({ theme }) =>
    `${theme.spacing['spacing-32']} ${theme.spacing['spacing-20']}`};

  & .title {
    font-size: ${({ theme }) => theme.typography.xl.size};
    line-height: ${({ theme }) => theme.typography.xl.lineHeight};
    color: ${({ theme }) => theme.colors['purple-2']};
  }
`

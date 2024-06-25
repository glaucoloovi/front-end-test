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
`

'use client'

import styled from 'styled-components'

export const StyledResumeCardGroup = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing['spacing-10']};
  grid-template-columns: repeat(6, 1fr);
`

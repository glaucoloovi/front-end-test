'use client'

import styled, { keyframes } from 'styled-components'

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }

  50% {
    opacity: .5;
  }
`

export const StyledSkeleton = styled.div`
  border-radius: ${({ theme }) => theme.radius.lg};
  background-color: ${({ theme }) => theme.colors.skeleton};
  animation: ${pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`

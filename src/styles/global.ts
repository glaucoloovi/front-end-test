'use client'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button, a {
    appearance: none;
    all: unset;
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  body {
    background-color: ${({ theme }) => theme.colors['gray-5']};
  }
`

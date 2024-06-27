export function formatNumber(value: number, style: string) {
  let options: Intl.NumberFormatOptions = {
    style: style,
  }

  switch (style) {
    case 'currency':
      options = {
        ...options,
        currency: 'BRL',
      }
      break
    case 'percent':
      if (value % 1 !== 0) {
        options = {
          ...options,
          minimumFractionDigits: 2,
        }
      }

      value = value / 100
      break
  }

  return value.toLocaleString('pt-BR', options)
}

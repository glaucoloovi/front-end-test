import { ArrowUpIcon } from '../icons/ArrowUpIcon'
import { EquityIcon } from '../icons/EquityIcon'
import { TrendingUpIcon } from '../icons/TrendingUpIcon'
import { StyledHeaderCard } from './styles'

type HeaderCardProps = {
  type: 'equity' | 'percentageProfit' | 'valueApplied'
  value: string
}

export function HeaderCard({ type, value }: HeaderCardProps) {
  const typeMap = {
    equity: {
      label: 'SALDO BRUTO',
      icon: <EquityIcon />,
    },
    percentageProfit: {
      label: 'RENTABILIDADE',
      icon: <TrendingUpIcon />,
    },
    valueApplied: {
      label: 'VALOR APLICADO',
      icon: <ArrowUpIcon />,
    },
  }

  return (
    <StyledHeaderCard>
      <div className="icon">{typeMap[type].icon}</div>
      <div className="content">
        <p className="label">{typeMap[type].label}</p>
        <strong>{value}</strong>
      </div>
    </StyledHeaderCard>
  )
}

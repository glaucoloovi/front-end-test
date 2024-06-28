import { InfoIcon } from '../icons/InfoIcon'
import { StyledIncomeCard } from './styles'

type IncomeCardProps = {
  label: string
  children: React.ReactNode
}

export function IncomeCard({ label, children }: IncomeCardProps) {
  return (
    <StyledIncomeCard>
      <p className="label">
        {label} <InfoIcon />
      </p>
      {children}
    </StyledIncomeCard>
  )
}

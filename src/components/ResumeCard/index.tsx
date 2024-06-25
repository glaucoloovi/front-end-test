import { StyledResumeCard } from './styles'

type ResumeCardProps = {
  label: string
  value: string
}

export function ResumeCard({ label, value }: ResumeCardProps) {
  return (
    <StyledResumeCard>
      <div className="content">
        <p className="label">{label}</p>
        <strong className="value">{value}</strong>
      </div>
    </StyledResumeCard>
  )
}

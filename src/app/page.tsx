import { Aside } from '@/components/Aside/intex'
import { ResumeCard } from '@/components/ResumeCard'
import { StyledMain, Wrapper } from './styles'

export default function Page() {
  return (
    <Wrapper>
      <Aside />
      <StyledMain>
        <h2 className="title">Renda fixa</h2>
        <div className="resume-card-group">
          <ResumeCard label="SALDO BRUTO" value="R$ 207.653,10" />
          <ResumeCard label="VALOR APLICADO" value="R$ 170.025,64" />
          <ResumeCard label="RESULTADO" value="R$ 37.638,46" />
          <ResumeCard label="RENTABILIDADE" value="25,08%" />
          <ResumeCard label="CDI" value="23,68%" />
          <ResumeCard label="% SOBRE CDI" value="320%" />
        </div>
      </StyledMain>
    </Wrapper>
  )
}

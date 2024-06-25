import { Aside } from '@/components/Aside/intex'
import { StyledMain, Wrapper } from './styles'

export default function Page() {
  return (
    <Wrapper>
      <Aside />
      <StyledMain>
        <h2 className="title">Renda fixa</h2>
      </StyledMain>
    </Wrapper>
  )
}

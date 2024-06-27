import { Aside } from '@/components/Aside/intex'
import { MyIncomesGroup } from '@/components/MyIncomesGroup'
import { PieChartGroup } from '@/components/PieChartGroup'
import { ProfitabilityChart } from '@/components/ProfitabilityChart'
import { ResumeCardGroup } from '@/components/ResumeCardGroup'
import { StyledMain, Wrapper } from './styles'

export default function Page() {
  return (
    <Wrapper>
      <Aside />
      <StyledMain>
        <h2 className="title">Renda fixa</h2>
        <ResumeCardGroup />
        <ProfitabilityChart />
        <MyIncomesGroup />
        <PieChartGroup />
      </StyledMain>
    </Wrapper>
  )
}

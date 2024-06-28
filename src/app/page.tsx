import { Aside } from '@/components/Aside/intex'
import { MyIncomesGroup } from '@/components/MyIncomesGroup'
import { PieChartGroup } from '@/components/PieChartGroup'
import { ProfitabilityChart } from '@/components/ProfitabilityChart'
import { ResumeCardGroup } from '@/components/ResumeCardGroup'
import { StyledMain, Wrapper } from './styles'

type PageProps = {
  searchParams?: {
    page?: string
    search?: string
  }
}

export default function Page({ searchParams }: PageProps) {
  const page = searchParams?.page || '1'
  const search = searchParams?.search || ''

  return (
    <Wrapper>
      <Aside />
      <StyledMain>
        <h2 className="title">Renda fixa</h2>
        <ResumeCardGroup />
        <ProfitabilityChart />
        <MyIncomesGroup currentPage={page} search={search} />
        <PieChartGroup />
      </StyledMain>
    </Wrapper>
  )
}

import { HeaderCard } from '@/components/HeaderCard'
import { Wrapper } from './styles'

export default function Page() {
  return (
    <Wrapper>
      <HeaderCard type="equity" value="130.521.230,02" />
      <HeaderCard type="valueApplied" value="521.230,02" />
      <HeaderCard type="percentageProfit" value="2,34%" />
    </Wrapper>
  )
}

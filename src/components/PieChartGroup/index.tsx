import { PieChart } from '../PieChart'
import { StyledPieChartGroup } from './styles'

export function PieChartGroup() {
  return (
    <StyledPieChartGroup>
      <PieChart title="Divisão de Carteira por Tipos" />
      <PieChart title="Divisão de Carteira por Título" />
    </StyledPieChartGroup>
  )
}

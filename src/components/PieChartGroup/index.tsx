'use client'

import { useAPIData } from '@/hooks/useAPIData'
import type { OrganizedData } from '@/types/organized-data'
import { PieChart } from '../PieChart'
import { StyledPieChartGroup } from './styles'

export function PieChartGroup() {
  const { data, error, isLoading } = useAPIData()

  const snapshotByProduct = data?.data?.snapshotByProduct
  const organizedDataByTypes: OrganizedData = {}
  const organizedDataByTitles: OrganizedData = {}

  snapshotByProduct?.forEach((item) => {
    const { bondType, name } = item.fixedIncome
    const portfolioPercentage = item.position.portfolioPercentage

    organizedDataByTypes[bondType] = {
      label: bondType,
      portfolioPercentage:
        (organizedDataByTypes[bondType]?.portfolioPercentage || 0) +
        portfolioPercentage,
    }
    organizedDataByTitles[name] = {
      label: name,
      portfolioPercentage:
        (organizedDataByTypes[name]?.portfolioPercentage || 0) +
        portfolioPercentage,
    }
  })

  return (
    <StyledPieChartGroup>
      <PieChart
        title="Divisão de Carteira por Tipos"
        error={error}
        isLoading={isLoading}
        organizedData={organizedDataByTypes}
      />
      <PieChart
        title="Divisão de Carteira por Título"
        error={error}
        isLoading={isLoading}
        organizedData={organizedDataByTitles}
      />
    </StyledPieChartGroup>
  )
}

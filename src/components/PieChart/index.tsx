'use client'

import { theme } from '@/styles/theme'
import type { OrganizedData } from '@/types/organized-data'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HighchartsExporting from 'highcharts/modules/exporting'
import { Skeleton } from '../Skeleton'
import { StyledPieChart } from './styles'

type PieChartProps = {
  title: string
  error: unknown
  isLoading: boolean
  organizedData: OrganizedData
}

const defaultOptions: Highcharts.Options = {
  credits: {
    enabled: false,
  },
  exporting: {
    enabled: false,
  },
  legend: {
    align: 'center',
    layout: 'horizontal',
    verticalAlign: 'bottom',
  },
  title: {
    align: 'left',
    style: {
      fontSize: theme.typography.lg.size,
      fontWeight: 'medium',
      color: theme.colors['gray-2'],
    },
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.2f}%</b>',
  },
  plotOptions: {
    pie: {
      dataLabels: {
        enabled: false,
      },
      showInLegend: true,
    },
  },
}

export function PieChart({
  title,
  error,
  isLoading,
  organizedData,
}: PieChartProps) {
  if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts)
  }

  const options: Highcharts.Options = {
    ...defaultOptions,
    title: {
      ...defaultOptions.title,
      text: title,
    },
    series: [
      {
        type: 'pie',
        innerSize: '50%',
        name: 'Porcentagem da carteira',
        data: Object.values(organizedData).map((item) => [
          item.label,
          item.portfolioPercentage,
        ]),
      },
    ],
  }

  return (
    <StyledPieChart>
      {isLoading || error ? (
        <Skeleton className="skeleton" />
      ) : (
        <HighchartsReact highcharts={Highcharts} options={options} />
      )}
    </StyledPieChart>
  )
}

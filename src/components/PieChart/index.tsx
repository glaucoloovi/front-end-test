'use client'

import { theme } from '@/styles/theme'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HighchartsExporting from 'highcharts/modules/exporting'
import { StyledPieChart } from './styles'

type PieChartProps = {
  title: string
}

export function PieChart({ title }: PieChartProps) {
  const options: Highcharts.Options = {
    credits: {
      enabled: false,
    },
    exporting: {
      enabled: false,
    },
    title: {
      text: title,
      align: 'left',
      style: {
        fontSize: theme.typography.lg.size,
        fontWeight: 'medium',
        color: theme.colors['gray-2'],
      },
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        type: 'pie',
        innerSize: '50%',
        data: [
          ['Option 1', 50],
          ['Option 2', 45],
          ['Option 3', 5],
        ],
      },
    ],
  }

  if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts)
  }

  return (
    <StyledPieChart>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </StyledPieChart>
  )
}

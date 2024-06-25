'use client'

import { theme } from '@/styles/theme'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HighchartsExporting from 'highcharts/modules/exporting'
import { StyledProfitabilityChart } from './styles'

const options: Highcharts.Options = {
  credits: {
    enabled: false,
  },
  exporting: {
    enabled: false,
  },
  legend: {
    enabled: false,
  },
  title: {
    text: 'Rentabilidade dos Títulos',
    align: 'left',
    style: {
      fontSize: theme.typography.lg.size,
      fontWeight: 'medium',
      color: theme.colors['gray-2'],
    },
  },
  xAxis: {
    categories: [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez',
    ],
    accessibility: {
      description: 'Meses do ano',
    },
    gridLineWidth: 1,
    labels: {
      style: {
        fontSize: theme.typography.xxs.size,
        fontWeight: 'medium',
        color: theme.colors['gray-2'],
      },
    },
    startOnTick: false,
    endOnTick: false,
  },
  yAxis: {
    title: {
      style: {
        display: 'none',
      },
    },
    labels: {
      style: {
        fontSize: theme.typography.xxs.size,
        fontWeight: 'medium',
        color: theme.colors['gray-2'],
      },
      formatter: function () {
        return new Intl.NumberFormat('pt-BR').format(this.value as number)
      },
    },
    showFirstLabel: false,
  },
  plotOptions: {
    areaspline: {
      marker: {
        enabled: false,
      },
    },
    series: {
      pointPlacement: 'on',
    },
  },
  series: [
    {
      type: 'areaspline',
      data: [
        12000, 8000, 7000, 10000, 12000, 10000, 7000, 8000, 9000, 9000, 8500,
        10000,
      ],
    },
    {
      type: 'areaspline',
      data: [
        8000, 6000, 5000, 8000, 10000, 8000, 5000, 6000, 7000, 7000, 6000, 7000,
      ],
    },
  ],
}

export function ProfitabilityChart() {
  if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts)
  }

  return (
    <StyledProfitabilityChart>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </StyledProfitabilityChart>
  )
}

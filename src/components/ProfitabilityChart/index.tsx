'use client'

import { useAPIData } from '@/hooks/useAPIData'
import { theme } from '@/styles/theme'
import { formatDate } from '@/utils/formatDate'
import { formatNumber } from '@/utils/formatNumber'
import { getTime } from 'date-fns'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HighchartsExporting from 'highcharts/modules/exporting'
import { useMemo } from 'react'
import { Skeleton } from '../Skeleton'
import { StyledProfitabilityChart } from './styles'

type OrganizedDataItem = {
  correctedQuota: number
  dailyReferenceDate: number
  productName: string
}

type OrganizedData = {
  [category: string]: OrganizedDataItem[]
}

const defaultOptions: Highcharts.Options = {
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
  xAxis: {
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
      formatter() {
        return formatNumber(this.value as number)
      },
    },
    showFirstLabel: false,
  },
}

export function ProfitabilityChart() {
  if (typeof Highcharts === 'object') {
    HighchartsExporting(Highcharts)
  }

  const { data, error, isLoading } = useAPIData()

  const { organizedData, dates } = useMemo(() => {
    const organizedData: OrganizedData = {}
    const dailyEquityByPortfolioChartData =
      data?.data?.dailyEquityByPortfolioChartData
    const dates = dailyEquityByPortfolioChartData
      ?.reduce((acc, item) => {
        if (!acc.includes(item.dailyReferenceDate)) {
          acc.push(item.dailyReferenceDate)
        }
        return acc
      }, [])
      .sort((a, b) => a - b)

    dailyEquityByPortfolioChartData?.forEach((item) => {
      organizedData[item.productName] = [
        ...(organizedData[item.productName] || []),
        {
          correctedQuota: item.correctedQuota,
          dailyReferenceDate: item.dailyReferenceDate,
          productName: item.productName,
        },
      ]
    })

    dates?.forEach((date) => {
      Object.keys(organizedData).forEach((key) => {
        const found = organizedData[key].find(
          (item) => item.dailyReferenceDate === date
        )

        if (!found) {
          organizedData[key].push({
            correctedQuota: 0,
            dailyReferenceDate: date,
            productName: key,
          })
        }
      })
    })

    return { organizedData, dates }
  }, [data])

  const options = useMemo(
    () => ({
      ...defaultOptions,
      xAxis: {
        ...defaultOptions.xAxis,
        categories: dates?.map((date) => formatDate(date)),
      },
      series: Object.keys(organizedData).map((key) => ({
        type: 'areaspline',
        name: organizedData[key][0].productName,
        data: organizedData[key]
          .sort((a, b) => {
            const dateA = getTime(new Date(a.dailyReferenceDate))
            const dateB = getTime(new Date(b.dailyReferenceDate))

            return dateA - dateB
          })
          .map((item) => item.correctedQuota),
      })),
    }),
    [organizedData, dates]
  )

  return (
    <StyledProfitabilityChart>
      {isLoading || error ? (
        <Skeleton className="skeleton" />
      ) : (
        <HighchartsReact highcharts={Highcharts} options={options} />
      )}
    </StyledProfitabilityChart>
  )
}

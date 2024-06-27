'use client'

import { useAPIData } from '@/hooks/useAPIData'
import { formatNumber } from '@/utils/formatNumber'
import { ResumeCard } from '../ResumeCard'
import { Skeleton } from '../Skeleton'
import { StyledResumeCardGroup } from './styles'

export function ResumeCardGroup() {
  const { data, isLoading, error } = useAPIData()

  const snapshotByPortfolio = data?.data?.snapshotByPortfolio

  return (
    <StyledResumeCardGroup>
      {isLoading || error ? (
        <>
          <Skeleton className="skeleton" />
          <Skeleton className="skeleton" />
          <Skeleton className="skeleton" />
          <Skeleton className="skeleton" />
          <Skeleton className="skeleton" />
          <Skeleton className="skeleton" />
        </>
      ) : (
        <>
          <ResumeCard
            label="SALDO BRUTO"
            value={formatNumber(snapshotByPortfolio.equity, 'currency')}
          />
          <ResumeCard
            label="VALOR APLICADO"
            value={formatNumber(snapshotByPortfolio.valueApplied, 'currency')}
          />
          <ResumeCard
            label="RESULTADO"
            value={formatNumber(snapshotByPortfolio.equityProfit, 'currency')}
          />
          <ResumeCard
            label="RENTABILIDADE"
            value={formatNumber(
              snapshotByPortfolio.percentageProfit,
              'percent'
            )}
          />
          <ResumeCard
            label="CDI"
            value={formatNumber(snapshotByPortfolio.indexerValue, 'percent')}
          />
          <ResumeCard
            label="% SOBRE CDI"
            value={formatNumber(
              snapshotByPortfolio.percentageOverIndexer,
              'percent'
            )}
          />
        </>
      )}
    </StyledResumeCardGroup>
  )
}

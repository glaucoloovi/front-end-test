'use client'

import { useAPIData } from '@/hooks/useAPIData'
import { formatNumber } from '@/utils/formatNumber'
import { HeaderCard } from '../HeaderCard'
import { Skeleton } from '../Skeleton'
import { ChevronDownIcon } from '../icons/ChevronDownIcon'
import { LogoIcon } from '../icons/LogoIcon'
import { MenuIcon } from '../icons/MenuIcon'
import { StyledHeader, StyledHeaderButton } from './styles'

export function Header() {
  const { data, isLoading, error } = useAPIData()

  const snapshotByPortfolio = data?.data?.snapshotByPortfolio

  return (
    <StyledHeader>
      <h1>
        <LogoIcon />
      </h1>
      <div className="card-group">
        {isLoading || error ? (
          <>
            <Skeleton className="skeleton" />
            <Skeleton className="skeleton" />
            <Skeleton className="skeleton" />
          </>
        ) : (
          <>
            <HeaderCard
              type="equity"
              value={formatNumber(snapshotByPortfolio.equity, 'currency')}
            />
            <HeaderCard
              type="valueApplied"
              value={formatNumber(snapshotByPortfolio.valueApplied, 'currency')}
            />
            <HeaderCard
              type="percentageProfit"
              value={formatNumber(
                snapshotByPortfolio.percentageProfit,
                'percent'
              )}
            />
          </>
        )}
      </div>
      <div className="card-group">
        <StyledHeaderButton aria-labelledby="wallet">
          <div className="icon">
            <ChevronDownIcon />
          </div>
          <div className="content">
            <p className="label" id="wallet">
              CARTEIRA
            </p>
            <strong>Minha Carteira</strong>
          </div>
        </StyledHeaderButton>
        <StyledHeaderButton aria-label="Menu">
          <div className="icon">
            <MenuIcon />
          </div>
        </StyledHeaderButton>
      </div>
    </StyledHeader>
  )
}

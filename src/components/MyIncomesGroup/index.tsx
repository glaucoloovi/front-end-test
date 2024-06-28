'use client'

import { useAPIData } from '@/hooks/useAPIData'
import { debounce } from '@/utils/debounce'
import { formatNumber } from '@/utils/formatNumber'
import { useRouter, useSearchParams } from 'next/navigation'
import { useMemo } from 'react'
import { IncomeCard } from '../IncomeCard'
import { Input } from '../Input'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../Pagination'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../Select'
import { Skeleton } from '../Skeleton'
import { StyledIncomeCardContent, StyledMyIncomesGroup } from './styles'

type MyIncomesGroupProps = {
  currentPage: string
  search: string
}

export function MyIncomesGroup({ currentPage, search }: MyIncomesGroupProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const orderBy = searchParams.get('orderBy')
  const urlSearchParams = new URLSearchParams(searchParams)

  const { data, error, isLoading } = useAPIData()

  const snapshotByProduct = data?.data?.snapshotByProduct

  const sortedSnapshotByProduct = useMemo(() => {
    if (!snapshotByProduct) return []
    switch (orderBy) {
      case 'name-asc':
        return [...snapshotByProduct].sort((a, b) =>
          a.fixedIncome.name.localeCompare(b.fixedIncome.name)
        )
      case 'name-desc':
        return [...snapshotByProduct].sort((a, b) =>
          b.fixedIncome.name.localeCompare(a.fixedIncome.name)
        )
      default:
        return snapshotByProduct
    }
  }, [orderBy, snapshotByProduct])

  return (
    <StyledMyIncomesGroup>
      <div className="header">
        <h3 className="label">Minhas Rendas Fixas</h3>
        <div className="filters">
          {isLoading || error ? (
            <>
              <Skeleton />
              <Skeleton />
            </>
          ) : (
            <>
              <Select
                defaultValue={orderBy}
                onValueChange={(value) => {
                  urlSearchParams.set('orderBy', value)
                  router.replace(`/?${urlSearchParams.toString()}`, {
                    scroll: false,
                  })
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name-asc">Nome A - Z</SelectItem>
                  <SelectItem value="name-desc">Nome Z - A</SelectItem>
                </SelectContent>
              </Select>
              <Input
                defaultValue={search}
                onChange={debounce((e: React.ChangeEvent<HTMLInputElement>) => {
                  urlSearchParams.set('search', e.target.value)
                  router.replace(`/?${urlSearchParams.toString()}`, {
                    scroll: false,
                  })
                }, 500)}
              />
            </>
          )}
        </div>
      </div>
      <section className="incomes">
        {isLoading || error ? (
          <>
            <div className="incomes-group">
              <Skeleton className="skeleton" />
              <Skeleton className="skeleton" />
              <Skeleton className="skeleton" />
            </div>
            <div className="incomes-group">
              <Skeleton className="skeleton" />
              <Skeleton className="skeleton" />
              <Skeleton className="skeleton" />
            </div>
            <div className="incomes-group">
              <Skeleton className="skeleton" />
              <Skeleton className="skeleton" />
              <Skeleton className="skeleton" />
            </div>
            <div className="incomes-group">
              <Skeleton className="skeleton" />
              <Skeleton className="skeleton" />
              <Skeleton className="skeleton" />
            </div>
            <div className="incomes-group">
              <Skeleton className="skeleton" />
              <Skeleton className="skeleton" />
              <Skeleton className="skeleton" />
            </div>
          </>
        ) : (
          sortedSnapshotByProduct?.map(
            (product) =>
              product.fixedIncome.name
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase()) && (
                <div
                  className="incomes-group"
                  key={product.fixedIncome.portfolioProductId}
                >
                  <IncomeCard label="TÍTULO">
                    <StyledIncomeCardContent $variant="default">
                      <p className="description">{product.fixedIncome.name}</p>
                      <div className="content-wrapper">
                        <span className="content-wrapper-label">CLASSE</span>
                        <p className="content-wrapper-value">
                          {product.fixedIncome.bondType}
                        </p>
                      </div>
                    </StyledIncomeCardContent>
                  </IncomeCard>
                  <IncomeCard label="MINHA POSIÇÃO">
                    <StyledIncomeCardContent $variant="primary">
                      <div className="content-wrapper">
                        <span className="content-wrapper-label">
                          VALOR INVES.
                        </span>
                        <p className="content-wrapper-value">
                          {formatNumber(
                            product.position.valueApplied,
                            'currency'
                          )}
                        </p>
                      </div>
                      <div className="content-wrapper">
                        <span className="content-wrapper-label">
                          SALDO BRUTO
                        </span>
                        <p className="content-wrapper-value">
                          {formatNumber(product.position.equity, 'currency')}
                        </p>
                      </div>
                      <div className="content-wrapper">
                        <span className="content-wrapper-label">RENT.</span>
                        <p className="content-wrapper-value">
                          {formatNumber(
                            product.position.profitability,
                            'percent'
                          )}
                        </p>
                      </div>
                      <div className="content-wrapper">
                        <span className="content-wrapper-label">
                          % DA CART.
                        </span>
                        <p className="content-wrapper-value">
                          {formatNumber(
                            product.position.portfolioPercentage,
                            'percent'
                          )}
                        </p>
                      </div>
                      <div className="content-wrapper">
                        <span className="content-wrapper-label">
                          {product.position.indexerLabel}
                        </span>
                        <p className="content-wrapper-value">
                          {formatNumber(product.position.indexerValue)}
                        </p>
                      </div>
                      <div className="content-wrapper">
                        <span className="content-wrapper-label">SOBRE CDI</span>
                        <p className="content-wrapper-value">
                          {formatNumber(product.position.percentageOverIndexer)}
                        </p>
                      </div>
                    </StyledIncomeCardContent>
                  </IncomeCard>
                  <IncomeCard label="VENCIMENTO">
                    <StyledIncomeCardContent $variant="secondary">
                      <div className="content-wrapper">
                        <span className="content-wrapper-label">
                          DATA VENC.
                        </span>
                        <p className="content-wrapper-value">
                          {product.due.date}
                        </p>
                      </div>
                      <div className="content-wrapper">
                        <span className="content-wrapper-label">
                          DIAS ATÉ VENC.
                        </span>
                        <p className="content-wrapper-value">
                          {product.due.daysUntilExpiration}
                        </p>
                      </div>
                    </StyledIncomeCardContent>
                  </IncomeCard>
                </div>
              )
          )
        )}
      </section>
      {!isLoading && !error && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="/?page=1" scroll={false} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="/?page=1"
                scroll={false}
                isActive={currentPage === '1'}
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="/?page=2"
                scroll={false}
                isActive={currentPage === '2'}
              >
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="/?page=2" scroll={false} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </StyledMyIncomesGroup>
  )
}

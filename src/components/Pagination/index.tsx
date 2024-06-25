import * as React from 'react'
import { ChevronRightIcon } from '../icons/ChevronRightIcon'
import {
  StyledPagination,
  StyledPaginationContent,
  StyledPaginationLink,
} from './styles'

const Pagination = ({ className, ...props }: React.ComponentProps<'nav'>) => (
  <StyledPagination
    role="navigation"
    aria-label="paginação"
    className={className}
    {...props}
  />
)
Pagination.displayName = 'Pagination'

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<'ul'>
>(({ className, ...props }, ref) => (
  <StyledPaginationContent ref={ref} className={className} {...props} />
))
PaginationContent.displayName = 'PaginationContent'

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<'li'>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={className} {...props} />
))
PaginationItem.displayName = 'PaginationItem'

type PaginationLinkProps = {
  isActive?: boolean
} & React.ComponentProps<typeof StyledPaginationLink>

const PaginationLink = ({
  className,
  isActive = false,
  ...props
}: PaginationLinkProps) => (
  <StyledPaginationLink
    aria-current={isActive ? 'page' : undefined}
    className={className}
    $isActive={isActive}
    {...props}
  />
)
PaginationLink.displayName = 'PaginationLink'

const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Ir para a página anterior"
    className={className}
    {...props}
  >
    <ChevronRightIcon className="left-version" />
  </PaginationLink>
)
PaginationPrevious.displayName = 'PaginationPrevious'

const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Ir para a próxima página"
    className={className}
    {...props}
  >
    <ChevronRightIcon />
  </PaginationLink>
)
PaginationNext.displayName = 'PaginationNext'

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}

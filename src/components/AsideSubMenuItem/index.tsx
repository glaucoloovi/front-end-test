'use client'

import { usePathname } from 'next/navigation'
import { ChevronRightIcon } from '../icons/ChevronRightIcon'
import { StyledAsideSubMenuItem } from './styles'

type AsideSubMenuItemProps = {
  label: string
  href: string
}

export function AsideSubMenuItem({ label, href }: AsideSubMenuItemProps) {
  const pathname = usePathname()
  const isActive = pathname.includes(href)

  return (
    <StyledAsideSubMenuItem href={href} $isActive={isActive}>
      <div className="badge" />
      {label}
      <ChevronRightIcon className="icon" />
    </StyledAsideSubMenuItem>
  )
}

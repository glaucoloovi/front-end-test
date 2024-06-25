'use client'

import { usePathname } from 'next/navigation'
import { ChevronRightIcon } from '../icons/ChevronRightIcon'
import { StyledAsideMenuItem } from './styles'

type AsideMenuItemProps = {
  label: string
  href: string
  icon: React.ReactNode
  children?: React.ReactNode
}

export function AsideMenuItem({
  label,
  href,
  icon,
  children,
}: AsideMenuItemProps) {
  const pathname = usePathname()
  const isActive = pathname.includes(href)

  return (
    <div>
      <StyledAsideMenuItem href={href} $isActive={isActive}>
        <div className="badge-icon">{icon}</div>
        {label}
        <ChevronRightIcon className="icon" />
      </StyledAsideMenuItem>
      {isActive && children}
    </div>
  )
}

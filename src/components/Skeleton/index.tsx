import { StyledSkeleton } from './styles'

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <StyledSkeleton className={className} {...props} />
}

export { Skeleton }

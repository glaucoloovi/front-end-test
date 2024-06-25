import * as React from 'react'
import { SearchIcon } from '../icons/SearchIcon'
import { StyledInput, Wrapper } from './styles'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <Wrapper>
        <SearchIcon className="icon" />
        <StyledInput type={type} className={className} ref={ref} {...props} />
      </Wrapper>
    )
  }
)
Input.displayName = 'Input'

export { Input }

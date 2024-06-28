'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import * as React from 'react'
import { ChevronDownIcon } from '../icons/ChevronDownIcon'
import {
  StyledSelectContent,
  StyledSelectItem,
  StyledSelectTrigger,
} from './styles'

const Select = SelectPrimitive.Root

const SelectGroup = SelectPrimitive.Group

const SelectValue = SelectPrimitive.Value

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <StyledSelectTrigger ref={ref} className={className} {...props}>
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDownIcon />
    </SelectPrimitive.Icon>
  </StyledSelectTrigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <StyledSelectContent
      ref={ref}
      className={className}
      position={position}
      {...props}
    >
      <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
    </StyledSelectContent>
  </SelectPrimitive.Portal>
))
SelectContent.displayName = SelectPrimitive.Content.displayName

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <StyledSelectItem ref={ref} className={className} {...props}>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </StyledSelectItem>
))
SelectItem.displayName = SelectPrimitive.Item.displayName

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
}

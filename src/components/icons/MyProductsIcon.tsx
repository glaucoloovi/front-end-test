import type { IconPropsType } from '@/types/icon-props'

export function MyProductsIcon(props: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18.482}
      height={18.482}
      viewBox="0 0 18.482 18.482"
      {...props}
    >
      <path
        d="M17.145 12.716A8.636 8.636 0 115.63 1.401"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
      />
      <path
        data-name="stroke"
        d="M9.241 9.241S9.173.6 9.241.6a8.682 8.682 0 018.641 8.641z"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
      />
    </svg>
  )
}

import type { IconPropsType } from '@/types/icon-props'

export function MyEarningsIcon(props: IconPropsType) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20.122}
      height={20.145}
      viewBox="0 0 20.122 20.145"
      {...props}
    >
      <rect
        width={18.922}
        height={18.944}
        rx={7.651}
        transform="translate(.6 .6)"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
      />
      <path
        data-name="stroke"
        d="M6.318 13.589h5.893a1.681 1.681 0 001.593-1.757h0a1.681 1.681 0 00-1.593-1.758h-4.3a1.681 1.681 0 01-1.593-1.758h0a1.681 1.681 0 011.593-1.758h5.192"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
      />
      <path
        data-name="stroke"
        transform="translate(10.061 4.982)"
        fill="none"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.2}
        d="M0 0L0 10.18"
      />
    </svg>
  )
}

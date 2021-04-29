import { FC, memo, MouseEvent } from 'react'

export interface ICloseButtonProps {
  handleClick: (event: MouseEvent<HTMLElement>) => void
  width?: number
  height?: number
  colorHex?: string
  className?: string
}

export const CloseButton: FC<ICloseButtonProps> = memo(
  ({
    handleClick,
    colorHex = '#fff',
    className = 'w-4 h-4'
  }: ICloseButtonProps) => (
    <button aria-label="Close" className={className} onClick={handleClick}>
      <svg
        width="22"
        height="22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M21 21L1 1M21 1L1 21" stroke={colorHex} strokeWidth="2" />
      </svg>
    </button>
  )
)

CloseButton.displayName = 'CloseButton'

export default CloseButton

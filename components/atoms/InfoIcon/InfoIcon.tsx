import { FC, memo } from 'react'

export interface IInfoIconProps {
  width?: number
  height?: number
  colorHex?: string
  className?: string
  style?: Record<string, any>
}

export const InfoIcon: FC<IInfoIconProps> = memo(
  ({
    width = 10,
    height = 10,
    colorHex = '#000',
    className = '',
    style = {}
  }: IInfoIconProps) => (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 245.334 245.334"
      className={className}
      style={{
        fill: `${colorHex}`,
        ...style
      }}
    >
      <path d="M122.667 0C55.028 0 0 55.028 0 122.667s55.027 122.667 122.666 122.667 122.667-55.028 122.667-122.667S190.305 0 122.667 0zm0 215.334C71.57 215.334 30 173.764 30 122.667S71.57 30 122.667 30s92.667 41.57 92.667 92.667-41.571 92.667-92.667 92.667z" />
      <path d="M107.667 109.167h30v79h-30zM107.667 57.167h30v29h-30z" />
    </svg>
  )
)

InfoIcon.displayName = 'InfoIcon'

export default InfoIcon

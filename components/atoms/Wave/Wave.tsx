import { FC, memo } from 'react'
import classNames from 'classnames'

export type TWavePosition = 'top' | 'bottom' | 'bottom-revert'

export type TWaveColor =
  | 'secondary'
  | 'white'
  | 'black'
  | 'primary'
  | 'brown'
  | 'yellow'

export interface IWaveProps {
  position?: TWavePosition
  colorName?: TWaveColor
  colorHex?: string
  className?: string
  style?: Record<string, any>
}

export const Wave: FC<IWaveProps> = memo(
  ({
    position = 'top',
    colorName = 'secondary',
    colorHex = '',
    className = '',
    style = {}
  }: IWaveProps) => (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 44"
      preserveAspectRatio="xMidYMin slice"
      className={classNames(
        'absolute left-0 w-full',
        {
          'bottom-full': position === 'top',
          'top-full': position === 'bottom',
          'top-full transform -translate-y-full': position === 'bottom-revert',
          'fill-secondary': colorName === 'secondary',
          'fill-white': colorName === 'white',
          'fill-black': colorName === 'black',
          'fill-primary': colorName === 'primary',
          'fill-brown': colorName === 'brown',
          'fill-yellow': colorName === 'yellow'
        },
        className
      )}
      style={{
        fill: `${colorHex}`,
        ...style
      }}
    >
      {(position === 'top' || position === 'bottom-revert') && (
        <path d="M279.243 0C174.167 0 34.974 18.59 0 27.885V44h1200V0C991.25 0 838.634 34.818 678.692 34.818S414.583 0 279.243 0z" />
      )}

      {position === 'bottom' && (
        <path d="M754.091 44C892.5 44 1165.03 30.367 1200 23.55V0H0v44c58.75 0 169.7-25.533 329.641-25.533C489.583 18.467 618.75 44 754.091 44z" />
      )}
    </svg>
  )
)
Wave.displayName = 'Wave'

export default Wave

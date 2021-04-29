import { FC, memo } from 'react'
import Image from 'next/image'
import classNames from 'classnames'

export interface ICarouselNavigationButtonProps {
  onButtonClick: () => void
  direction?: 'right' | 'left'
  color?: 'primary' | 'white'
  className?: string
}

export const CarouselNavigationButton: FC<ICarouselNavigationButtonProps> = memo(
  ({
    onButtonClick,
    direction = 'right',
    color = 'primary',
    className = ''
  }: ICarouselNavigationButtonProps) => (
    <button
      aria-label={`Go ${direction}`}
      onClick={onButtonClick}
      className={className}
    >
      <Image
        width={15}
        height={30}
        src={`/images/arrow-right-${color}-icon.svg`}
        className={classNames({ 'transform rotate-180': direction === 'left' })}
        alt=""
      />
    </button>
  )
)

CarouselNavigationButton.displayName = 'CarouselNavigationButton'

export default CarouselNavigationButton

import { FC, memo } from 'react'
import times from 'lodash/times'
import classNames from 'classnames'

import { TTheme } from '@temp/types'

export interface ICarouselPaginationProps {
  slideCount: number
  currentSlide: number
  goToSlide: Function
  theme?: TTheme
  className?: string
}

export const CarouselPagination: FC<ICarouselPaginationProps> = memo(
  ({
    slideCount,
    currentSlide,
    goToSlide,
    theme = 'light',
    className = ''
  }: ICarouselPaginationProps) => (
    <div className={`flex h-2 ${className}`}>
      {times(slideCount, (index) => (
        <button
          key={index}
          aria-label={`Go to ${index} slide`}
          className={classNames('block mx-1 w-2 h-2 rounded-full', {
            'bg-secondary': theme === 'light',
            'bg-white': theme === 'dark',
            'opacity-25': currentSlide !== index
          })}
          onClick={() => goToSlide(index)}
        />
      ))}
    </div>
  )
)

CarouselPagination.displayName = 'CarouselPagination'

export default CarouselPagination

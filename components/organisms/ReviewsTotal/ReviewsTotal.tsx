import { FC, memo } from 'react'
import times from 'lodash/times'

import { Star } from '@components/atoms'

export interface IReviewsTotalProps {
  description: string
  starsNumber?: number
  className?: string
}

export const ReviewsTotal: FC<IReviewsTotalProps> = memo(
  ({ description, starsNumber = 5, className = '' }: IReviewsTotalProps) => (
    <div className={`inline-flex items-center ${className}`}>
      <div className="inline-flex mr-2 gap-x-1">
        {times(starsNumber, (index) => (
          <Star key={index} />
        ))}
      </div>

      <span className="text-secondary" aria-label="presentation">
        {description}
      </span>
    </div>
  )
)

ReviewsTotal.displayName = 'ReviewsTotal'

export default ReviewsTotal

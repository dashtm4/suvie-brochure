import { FC, memo } from 'react'
import Image from 'next/image'
import isEmpty from 'lodash/isEmpty'
import classNames from 'classnames'

import { IReview } from '@temp/types'

export interface IReviewCardProps {
  review: IReview
  className?: string
  isTransparent?: boolean
}

export const ReviewCard: FC<IReviewCardProps> = memo(
  ({ review, className = '', isTransparent = false }: IReviewCardProps) => {
    const hasImage = !isEmpty(review?.image?.url)

    if (hasImage) {
      return (
        <div
          className={classNames(
            'bg-white rounded text-left w-60 max-w-full overflow-hidden',
            className
          )}
          style={{ boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.15' }}
        >
          <div className={classNames({ 'opacity-25': isTransparent })}>
            <figure role="none" className="relative w-60 h-60">
              <Image
                src={review?.image?.url}
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </figure>
            <div className="px-4 py-2">
              <div className="mb-2 font-serif text-2xl font-normal text-secondary">
                {review.name}
              </div>
              <div className="text-secondary">{review.body}</div>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div
        className={classNames(
          'bg-white rounded shadow-xl text-left w-60 max-w-full py-4 px-6',
          className
        )}
        style={{ boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.15' }}
      >
        <div className={classNames({ 'opacity-25': isTransparent })}>
          <div
            className="font-serif leading-tight text-7xl h-18"
            style={{ color: '#555' }}
          >
            “
          </div>
          <div
            className="font-serif text-2xl font-normal mb-7"
            style={{ color: '#555' }}
          >
            {review.body}
          </div>
          <div className="font-serif text-2xl font-normal text-secondary">
            {review.name}
          </div>
        </div>
      </div>
    )
  }
)

ReviewCard.displayName = 'ReviewCard'

export default ReviewCard

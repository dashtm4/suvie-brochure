import { FC, useEffect, useState, memo } from 'react'
import Carousel from 'nuka-carousel'
import isEmpty from 'lodash/isEmpty'

import { CarouselNavigationButton } from '@components/atoms'
import { CarouselPagination } from '@components/molecules'
import { ReviewCard } from '@components/organisms'
import { IReview } from '@temp/types'
import { useWindowSize } from '@hooks'

export interface IReviewsCarouselProps {
  reviews: IReview[]
  className?: string
}

export const ReviewsCarousel: FC<IReviewsCarouselProps> = memo(
  ({ reviews, className = '' }: IReviewsCarouselProps) => {
    const windowSize = useWindowSize()

    const [slideIndex, setSlideIndex] = useState<number>(0)
    const [heightClass, setHeightClass] = useState<string>('')

    const reviewWidth = 300
    const cellSpacing = 60
    const slidesToShow =
      windowSize.width > 0 ? windowSize.width / (reviewWidth + cellSpacing) : 5

    useEffect(() => {
      // we need a small delay, otherwise the card will try to take a large value of height
      if (isEmpty(heightClass) && windowSize.width > 0) {
        setTimeout(() => setHeightClass('h-full'), 300)
      }
    }, [windowSize.width])

    return (
      <Carousel
        slideIndex={slideIndex}
        transitionMode="scroll3d"
        cellSpacing={cellSpacing}
        slidesToShow={slidesToShow}
        heightMode="max"
        zoomScale={1}
        opacityScale={1}
        wrapAround={true}
        afterSlide={(index) => setSlideIndex(index)}
        renderCenterLeftControls={null}
        renderCenterRightControls={null}
        renderCenterCenterControls={({ previousSlide, nextSlide }) => (
          <div
            className="hidden sm:flex sm:justify-between"
            style={{ width: '380px' }}
          >
            <CarouselNavigationButton
              onButtonClick={previousSlide}
              direction="left"
            />
            <CarouselNavigationButton onButtonClick={nextSlide} />
          </div>
        )}
        renderBottomCenterControls={({
          slideCount,
          currentSlide,
          goToSlide
        }) => (
          <CarouselPagination
            slideCount={slideCount}
            currentSlide={currentSlide}
            goToSlide={goToSlide}
          />
        )}
        className={className}
      >
        {reviews?.map((review: IReview, index: number) => (
          <div key={review.id} className={`${heightClass} pb-6`}>
            <ReviewCard
              review={review}
              className={`${heightClass} mx-auto`}
              isTransparent={index !== slideIndex}
            />
          </div>
        ))}
      </Carousel>
    )
  }
)

ReviewsCarousel.displayName = 'ReviewsCarousel'

export default ReviewsCarousel

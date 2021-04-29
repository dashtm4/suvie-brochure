import { FC, memo } from 'react'
import dynamic from 'next/dynamic'

import { Wave, ButtonLink } from '@components/atoms'
import { Container } from '@components/containers'
import { SectionTitle } from '@components/organisms'
import { PATHS } from '@temp/config'

import { IReview } from '@types'

export interface IReviewsSectionProps {
  reviews: IReview[]
}

// If import not dynamically, the cards will not be the right height.
const ReviewsCarousel = dynamic(
  import('@components/organisms/ReviewsCarousel'),
  { ssr: false }
)

export const ReviewsSection: FC<IReviewsSectionProps> = memo(
  ({ reviews }: IReviewsSectionProps) => (
    <section className="relative bg-white text-center py-16 md:pt-20">
      <Wave colorName="white" />

      <Container>
        <SectionTitle className="mb-6 md:mb-11">
          Join thousands of members who are cooking easier.
        </SectionTitle>
      </Container>

      <ReviewsCarousel reviews={reviews} className="mb-6 md:mb-7" />

      <ButtonLink href={PATHS.REVIEWS} className="w-46 max-w-full">
        Explore reviews
      </ButtonLink>

      <Wave position="bottom" colorName="white" />
    </section>
  )
)

ReviewsSection.displayName = 'ReviewsSection'

export default ReviewsSection

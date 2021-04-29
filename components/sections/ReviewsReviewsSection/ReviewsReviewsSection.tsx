import { FC, memo } from 'react'

import { YotpoReviews } from '@components/organisms'
import { Container } from '@components/containers'

export interface IReviewsReviewsSectionProps {}

export const ReviewsReviewsSection: FC<IReviewsReviewsSectionProps> = memo(
  () => (
    <section className="py-14">
      <Container>
        <YotpoReviews />
      </Container>
    </section>
  )
)

ReviewsReviewsSection.displayName = 'ReviewsReviewsSection'

export default ReviewsReviewsSection

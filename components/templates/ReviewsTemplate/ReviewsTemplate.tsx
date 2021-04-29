import { FC, memo } from 'react'

import { DefaultHero } from '@components/organisms'
import { ReviewsReviewsSection } from '@components/sections'

export interface IReviewsTemplateProps {}

export const ReviewsTemplate: FC<IReviewsTemplateProps> = memo(() => (
  <main>
    <DefaultHero
      title="Reviews"
      strapline="The Suvie Kitchen Robot"
      subtitle="See what Suvie members are saying"
      imageSrc="/images/reviews-page/reviews-hero-background.jpg"
    />
    <ReviewsReviewsSection />
  </main>
))

ReviewsTemplate.displayName = 'ReviewsTemplate'

export default ReviewsTemplate

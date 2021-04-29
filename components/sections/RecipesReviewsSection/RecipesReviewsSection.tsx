import { FC, memo } from 'react'

import { Wave } from '@components/atoms'
import { Container } from '@components/containers'
import { SectionTitle, YotpoReviews } from '@components/organisms'

export interface IRecipesReviewsSectionProps {}

export const RecipesReviewsSection: FC<IRecipesReviewsSectionProps> = memo(
  () => (
    <section className="relative pt-20 pb-10">
      <Container>
        <SectionTitle className="mb-8">Reviews</SectionTitle>
        <YotpoReviews />
      </Container>

      <Wave position="bottom" colorName="white" />
    </section>
  )
)

RecipesReviewsSection.displayName = 'RecipesReviewsSection'

export default RecipesReviewsSection

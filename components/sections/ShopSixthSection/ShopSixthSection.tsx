import { FC, memo } from 'react'

import { Container } from '@components/containers'
import { SectionTitle, YotpoReviews } from '@components/organisms'

export interface IShopSixthSectionProps {}

export const ShopSixthSection: FC<IShopSixthSectionProps> = memo(() => (
  <section className="bg-quaternary pt-12 pb-24">
    <Container>
      <SectionTitle className="mb-16 md:mb-8">Reviews</SectionTitle>
      <YotpoReviews />
    </Container>
  </section>
))

ShopSixthSection.displayName = 'ShopSixthSection'

export default ShopSixthSection

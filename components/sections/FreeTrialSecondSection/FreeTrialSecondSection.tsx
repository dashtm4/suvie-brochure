import { FC, memo } from 'react'

import { Container } from '@components/containers'
import { SectionTitle } from '@components/organisms'

import { TITLE, SUBTITLE } from './constants'

export interface IFreeTrialSecondSectionProps {}

export const FreeTrialSecondSection: FC<IFreeTrialSecondSectionProps> = memo(
  () => (
    <section className="pt-8 md:pt-13 pb-8 md:pb-24">
      <Container>
        <SectionTitle fontSizeClassName="text-4xl" className="mb-4">
          {TITLE}
        </SectionTitle>
        <div className="font-lg text-secondary text-center max-w-lg mx-auto">
          {SUBTITLE}
        </div>
      </Container>
    </section>
  )
)

FreeTrialSecondSection.displayName = 'FreeTrialSecondSection'

export default FreeTrialSecondSection

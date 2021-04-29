import { FC, memo } from 'react'
import Image from 'next/image'

import { Wave } from '@components/atoms'
import { Container } from '@components/containers'

export interface IHomeSealsSectionProps {}

export const HomeSealsSection: FC<IHomeSealsSectionProps> = memo(() => (
  <section className="relative pt-5 pb-16 bg-white md:pt-4 md:pb-9">
    <Wave colorName="white" />

    <Container>
      <div className="flex flex-wrap justify-center gap-y-4 gap-x-13">
        <div
          className="flex-shrink-0 w-26 md:relative"
          style={{ top: '-35px' }}
          role="presentation"
        >
          <Image
            width="130"
            height="130"
            src="/images/home-page/multi-zone-cooking.svg"
            alt="Multi-zone cooking"
          />
        </div>

        <div
          className="flex-shrink-0 w-26 md:relative"
          style={{ top: '-10px' }}
          role="presentation"
        >
          <Image
            width="130"
            height="130"
            src="/images/dinner-ready-25-minutes.svg"
            alt="Dinner ready - 25 minutes"
          />
        </div>

        <div className="flex-shrink-0 w-26" role="presentation">
          <Image
            width="130"
            height="130"
            src="/images/cool-to-cook-technology.svg"
            alt="Cool to cook technology"
          />
        </div>

        <div
          className="flex-shrink-0 w-26 md:relative"
          style={{ top: '-10px' }}
          role="presentation"
        >
          <Image
            width="130"
            height="130"
            src="/images/home-page/services-4-plus-adults.svg"
            alt="Serviced 4+ adults"
          />
        </div>
      </div>
    </Container>
  </section>
))

HomeSealsSection.displayName = 'HomeSealsSection'

export default HomeSealsSection

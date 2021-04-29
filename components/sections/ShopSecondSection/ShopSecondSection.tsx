import { FC, memo } from 'react'
import Image from 'next/image'

import { Wave } from '@components/atoms'
import { InfoLink } from '@components/molecules'
import { Container } from '@components/containers'
import { PATHS } from '@temp/config'

export interface IShopSecondSectionProps {}

export const ShopSecondSection: FC<IShopSecondSectionProps> = memo(() => (
  <section className="relative py-20 text-center bg-secondary">
    <Wave />

    <div
      className="absolute transform -translate-x-1/2 translate-y-1/2 bottom-full left-1/2"
      role="presentation"
    >
      <Image
        width="150"
        height="150"
        src="/images/100-day-home-trial-risk-free-colored.svg"
        alt=""
      />
    </div>

    <Container>
      <h2 className="font-serif text-2xl font-normal text-white md:text-4xl">
        <span>Try Suvie risk free with a </span>
        <span className="inline-flex">
          100-day home trial.
          <InfoLink
            href={PATHS.FREE_TRIAL}
            width={23}
            height={23}
            colorHex="#c0c0c0"
            className="ml-1"
          />
        </span>
      </h2>
    </Container>

    <Wave position="bottom" />
  </section>
))

ShopSecondSection.displayName = 'ShopSecondSection'

export default ShopSecondSection

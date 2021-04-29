import { FC, memo } from 'react'
import Image from 'next/image'

import { Wave, ButtonLink } from '@components/atoms'
import { ReviewsTotal, PressList, SectionTitle } from '@components/organisms'
import { Container } from '@components/containers'
import { useWindowSize } from '@hooks'
import { PATHS } from '@temp/config'

export interface IHomeExploreKitchenRobotSectionProps {}

export const HomeExploreKitchenRobotSection: FC<IHomeExploreKitchenRobotSectionProps> = memo(
  () => {
    const windowSize = useWindowSize()

    const imageWidth = windowSize.width > 768 ? 831 : 326
    const imageHeight = windowSize.width > 768 ? 390 : 364
    const imageScr =
      windowSize.width > 768
        ? '/images/home-page/suvie-cool-to-cook-system_desktop.png'
        : '/images/home-page/suvie-cool-to-cook-system_mobile.png'

    return (
      <section
        className="relative pt-10 text-center pb-18 md:pt-16 md:pb-22"
        style={{
          backgroundColor: '#fff5e8'
        }}
      >
        <Wave colorHex="#fff5e8" />

        <Container>
          <ReviewsTotal description="744 reviews" className="mb-5" />

          <div className="mx-auto" style={{ maxWidth: '33.75rem' }}>
            <SectionTitle className="mb-4 md:mb-3">
              Your 15-in-1 time-saving cool-to-cook system.
            </SectionTitle>

            <div className="mb-5 text-secondary md:mb-4">
              Cook complete meals for you or the entire family. Suvie
              intelligently refrigerates and cooks your meal using multiple
              zones, giving you an easy hands-free cooking experience.
            </div>

            <ButtonLink
              href={PATHS.KITCHEN_ROBOT}
              className="max-w-full mb-5 w-54 md:mb-6"
            >
              See How It Works
            </ButtonLink>
          </div>

          <div className="mb-11 md:mb-9" role="presentation">
            <Image
              width={imageWidth}
              height={imageHeight}
              src={imageScr}
              alt="Suvie Kitchen Robot"
            />
          </div>

          <PressList />
        </Container>
      </section>
    )
  }
)

HomeExploreKitchenRobotSection.displayName = 'HomeExploreKitchenRobotSection'

export default HomeExploreKitchenRobotSection

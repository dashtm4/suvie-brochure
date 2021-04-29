import { FC, memo } from 'react'
import Image from 'next/image'
import Carousel from 'nuka-carousel'
import chunk from 'lodash/chunk'

import { Wave } from '@components/atoms'
import { Container } from '@components/containers'
import { CarouselPagination } from '@components/molecules'
import { SectionTitle, Feature } from '@components/organisms'
import { useWindowSize } from '@hooks'

import robotFeatures from '@temp/static/robot-features.json'

export interface IHomeKitchenRobotFunctionsSectionProps {}

export const HomeKitchenRobotFunctionsSection: FC<IHomeKitchenRobotFunctionsSectionProps> = memo(
  () => {
    const windowSize = useWindowSize()

    return (
      <section
        className="relative pb-5 text-center"
        style={{ backgroundColor: '#ebebeb' }}
      >
        <div
          className="bg-center bg-repeat bg-cover"
          style={{
            height: windowSize.width > 768 ? '50rem' : '43.75rem',
            backgroundImage:
              'linear-gradient(0deg, #EBEBEB 14%, rgba(235, 235, 235, 0.1) 42%), url(/images/home-page/home-kitchen-robot-functions-section-background.jpg)'
          }}
        />
        <Container className="-mt-20" style={{ maxWidth: '61.25rem' }}>
          <Image
            width="75"
            height="75"
            src="/images/suvie-kitchen-robot-icon.svg"
          />
          <SectionTitle className="mb-5 md:mb-10">
            <span className="block mb-2" style={{ fontSize: '1.5rem' }}>
              Suvie <strong>Kitchen Robot</strong>
            </span>
            Less space than your microwave.
          </SectionTitle>

          {windowSize.width < 768 && (
            <Carousel
              className="pb-7"
              renderCenterLeftControls={null}
              renderCenterRightControls={null}
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
            >
              {chunk(robotFeatures, 3).map((features, index) => (
                <div key={index} className="max-w-full mx-auto w-52">
                  {features.map((feature) => (
                    <Feature
                      key={feature.title}
                      title={feature.title}
                      description={feature.description}
                      imageSrc={feature.image}
                      className="mb-4 last:mb-0"
                    />
                  ))}
                </div>
              ))}
            </Carousel>
          )}
          {windowSize.width >= 768 && (
            <div className="md:flex md:flex-wrap md:justify-center md:gap-x-10 md:gap-y-6">
              {robotFeatures.map((feature) => (
                <div key={feature.title} className="w-40 max-w-full mx-auto">
                  <Feature
                    title={feature.title}
                    description={feature.description}
                    imageSrc={feature.image}
                  />
                </div>
              ))}
            </div>
          )}
        </Container>

        <Wave position="bottom" colorHex="#ebebeb" style={{ zIndex: 1 }} />
      </section>
    )
  }
)

HomeKitchenRobotFunctionsSection.displayName =
  'HomeKitchenRobotFunctionsSection'

export default HomeKitchenRobotFunctionsSection

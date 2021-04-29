import { FC, memo } from 'react'
import Carousel from 'nuka-carousel'

import { Wave } from '@components/atoms'
import { Container } from '@components/containers'
import { CarouselPagination } from '@components/molecules'
import { SectionTitle, Feature, Badge } from '@components/organisms'
import { useWindowSize } from '@hooks'

import starchCookerFeatures from '@temp/static/starch-cooker-features.json'
import Image from 'next/image'

export interface IHomeStarchCookerFunctionsSectionProps {}

export const HomeStarchCookerFunctionsSection: FC<IHomeStarchCookerFunctionsSectionProps> = memo(
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
              'linear-gradient(0deg, #EBEBEB 14%, rgba(235, 235, 235, 0.1) 42%), url(/images/home-page/home-starch-cooker-functions-section-background.jpg)'
          }}
        />
        <Container
          className="-mt-20"
          style={{ maxWidth: '61.25rem' }}
          role="presentation"
        >
          <Image
            width="75"
            height="75"
            src="/images/suvie-starch-cooker-icon.svg"
          />

          <SectionTitle className="mb-3">
            <span
              className="block mb-2"
              style={{ fontSize: '1.5rem' }}
              aria-label="presentation"
            >
              Suvie <strong>Starch Cooker</strong>
            </span>
            In sync with your magical robot.
          </SectionTitle>

          <Badge theme="light--transparent" className="mb-9">
            Optional Add-On
          </Badge>

          {windowSize.width < 768 && (
            <Carousel
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
              {starchCookerFeatures.map((feature) => (
                <div key={feature.title} className="pb-7">
                  <Feature
                    key={feature.title}
                    title={feature.title}
                    description={feature.description}
                    imageSrc={feature.image}
                  />
                </div>
              ))}
            </Carousel>
          )}
          {windowSize.width >= 768 && (
            <div className="md:flex md:flex-wrap md:justify-center md:gap-x-10 md:gap-y-6">
              {starchCookerFeatures.map((feature) => (
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

        <Wave position="bottom" colorHex="#ebebeb" />
      </section>
    )
  }
)

HomeStarchCookerFunctionsSection.displayName =
  'HomeStarchCookerFunctionsSection'

export default HomeStarchCookerFunctionsSection

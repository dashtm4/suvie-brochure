import { FC, memo } from 'react'
import Carousel from 'nuka-carousel'

import { CarouselNavigationButton } from '@components/atoms'
import { CarouselPagination } from '@components/molecules'
import { SectionTitle, SimpleHero } from '@components/organisms'
import { useWindowSize } from '@hooks'

import { TITLE, DESCRIPTION, SLIDERS } from './constants'

export interface IHomeSliderSectionProps {}

export const HomeSliderSection: FC<IHomeSliderSectionProps> = memo(() => {
  const windowSize = useWindowSize()
  const carouselInitialHeight = windowSize.width > 768 ? 698 : 500

  return (
    <section className="relative">
      <Carousel
        initialSlideHeight={carouselInitialHeight}
        renderCenterLeftControls={({ previousSlide }) => (
          <CarouselNavigationButton
            onButtonClick={previousSlide}
            direction="left"
            color="white"
            className="hidden ml-2 md:block"
          />
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <CarouselNavigationButton
            onButtonClick={nextSlide}
            color="white"
            className="hidden mr-2 md:block"
          />
        )}
        renderBottomCenterControls={({
          slideCount,
          currentSlide,
          goToSlide
        }) => (
          <CarouselPagination
            slideCount={slideCount}
            currentSlide={currentSlide}
            goToSlide={goToSlide}
            theme="dark"
            className="pb-11 md:pb-12"
          />
        )}
      >
        {SLIDERS.map((slider) => (
          <SimpleHero
            key={slider.imageSrc}
            imageSrc={slider.imageSrc}
            mobileHeight={500}
            desktopHeight={698}
          />
        ))}
      </Carousel>

      <div className="absolute top-1/2 left-1/2 max-w-xs text-center transform -translate-x-1/2 -translate-y-1/2">
        <SectionTitle theme="dark" className="mb-4 md:mb-5">
          {TITLE}
        </SectionTitle>
        <div className="font-normal text-white">{DESCRIPTION}</div>
      </div>
    </section>
  )
})

HomeSliderSection.displayName = 'HomeSliderSection'

export default HomeSliderSection

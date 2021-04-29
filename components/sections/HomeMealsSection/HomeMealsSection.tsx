import { FC, memo, useMemo, useState } from 'react'
import Link from 'next/link'
import Carousel from 'nuka-carousel'
import { useQuery } from '@apollo/client'

import { CarouselNavigationButton, ButtonLink } from '@components/atoms'
import { Container } from '@components/containers'
import { MealCard, SectionTitle } from '@components/organisms'
import { CarouselPagination } from '@components/molecules'
import { IMeal } from '@temp/types'
import { useWindowSize } from '@hooks'
import { PATHS } from '@temp/config'
import { HOME_PAGE_QUERY } from '@queries'
import { normalizeMeal } from '@utils'

import { TITLE, SUBTITLE } from './constants'

export interface IHomeMealsSectionProps {}

export const HomeMealsSection: FC<IHomeMealsSectionProps> = memo(() => {
  const queryResult = useQuery(HOME_PAGE_QUERY)
  const meals = queryResult?.data?.home_page?.meals_list?.meals ?? []

  const normalizedMeals: IMeal[] = useMemo(
    () => meals?.map((meal) => normalizeMeal(meal)),
    [meals]
  )

  const windowSize = useWindowSize()

  const [slideIndex, setSlideIndex] = useState<number>(0)

  const isDesktop = windowSize.width > 768
  const slideWidth = isDesktop ? 400 : 300
  const cellSpacing = 85
  const slidesToShow =
    windowSize.width > 0
      ? Math.min(windowSize.width / (slideWidth + cellSpacing), 3)
      : 3

  return (
    <section
      className="pb-32 pt-26 md:pt-25 md:pb-33"
      style={{
        backgroundColor: '#fff5e8'
      }}
    >
      <Container>
        <SectionTitle className="mb-4 md:text-4xl">{TITLE}</SectionTitle>

        <div className="text-lg text-center text-secondary mb-7 md:max-w-lg md:mx-auto">
          {SUBTITLE}
        </div>

        <ButtonLink
          href={PATHS.RECIPES}
          className="hidden md:block md:w-51 md:max-w-full md:mx-auto md:mb-10"
        >
          See What’s Cooking
        </ButtonLink>
      </Container>

      <Container style={{ maxWidth: '1480px' }}>
        <Carousel
          slideIndex={slideIndex}
          slidesToShow={slidesToShow}
          transitionMode="scroll3d"
          zoomScale={1}
          opacityScale={0.25}
          wrapAround={true}
          cellSpacing={cellSpacing}
          afterSlide={(index) => setSlideIndex(index)}
          renderCenterLeftControls={null}
          renderCenterRightControls={null}
          renderCenterCenterControls={({ previousSlide, nextSlide }) => (
            <div
              className="hidden lg:flex lg:justify-between lg:-mt-24"
              style={{ width: '510px' }}
            >
              <CarouselNavigationButton
                onButtonClick={previousSlide}
                direction="left"
              />
              <CarouselNavigationButton onButtonClick={nextSlide} />
            </div>
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
              className="md:hidden"
            />
          )}
          className="mb-6 md:mb-0"
        >
          {normalizedMeals?.map((meal: IMeal, index) => (
            <MealCard
              key={meal.id}
              meal={meal}
              showTags={!isDesktop}
              showPlateImage={true}
              className="pb-8 mx-auto mb:pb-0"
              playVideo={index === slideIndex}
              showCTAButton={true}
            />
          ))}
        </Carousel>

        <div className="md:hidden">
          <Link href={PATHS.RECIPES}>
            <a className="block max-w-full mx-auto btn btn_primary w-51">
              See What’s Cooking
            </a>
          </Link>
        </div>
      </Container>
    </section>
  )
})

HomeMealsSection.displayName = 'HomeMealsSection'

export default HomeMealsSection

import { FC, memo, useState } from 'react'
import Carousel from 'nuka-carousel'

import { Container, Row, Col } from '@components/containers'
import { CarouselPagination } from '@components/molecules'
import { LearnMoreCard, SectionTitle } from '@components/organisms'
import { useWindowSize } from '@hooks'

import robotFunctions from '@temp/static/robot-functions.json'

export interface IShopThirdSectionProps {}

export const ShopThirdSection: FC<IShopThirdSectionProps> = memo(() => {
  const windowSize = useWindowSize()

  const learnMoreCardWidth = 250
  const cellSpacing = 30
  const slidesToShow =
    windowSize.width > 0
      ? windowSize.width / (learnMoreCardWidth + cellSpacing)
      : 1

  const [slideIndex, setSlideIndex] = useState<number>(0)

  return (
    <section className="bg-quaternary pt-18 pb-9 md:pt-30 mb:pb-10">
      <Container style={{ maxWidth: '55rem' }}>
        <SectionTitle className="mb-6 md:mb-3">
          Suvie is your time-saving 15-in-1 <br /> kitchen robot system.
        </SectionTitle>

        <div className="mb-6 text-center text-octonary md:mb-8">
          Click to learn more about each function.
        </div>

        {windowSize.width >= 768 && (
          <Row>
            {robotFunctions.map((item) => (
              <Col key={item.title} className="w-full mb-4 md:w-1/3">
                <LearnMoreCard
                  title={item.title}
                  shortDescription={item.shortDescription}
                  posterSrc={item.posterSrc}
                  videoSrc={item.videoSrc}
                  description={item.description}
                  tags={item.tags}
                  className="mx-auto"
                />
              </Col>
            ))}
          </Row>
        )}
      </Container>

      {windowSize.width < 768 && (
        <Carousel
          slideIndex={slideIndex}
          transitionMode="scroll3d"
          cellSpacing={cellSpacing}
          slidesToShow={slidesToShow}
          zoomScale={1}
          opacityScale={1}
          afterSlide={(index) => setSlideIndex(index)}
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
          {robotFunctions.map((item, index) => (
            <div key={item.title} className="pb-6">
              <LearnMoreCard
                title={item.title}
                shortDescription={item.shortDescription}
                posterSrc={item.posterSrc}
                videoSrc={item.videoSrc}
                description={item.description}
                tags={item.tags}
                className="mx-auto"
                playVideo={index === slideIndex}
              />
            </div>
          ))}
        </Carousel>
      )}
    </section>
  )
})

ShopThirdSection.displayName = 'ShopThirdSection'

export default ShopThirdSection

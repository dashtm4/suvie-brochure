import { FC, memo, useMemo } from 'react'
import Image from 'next/image'
import Carousel from 'nuka-carousel'
import { useQuery } from '@apollo/client'
import sortBy from 'lodash/sortBy'

import { ButtonLink } from '@components/atoms'
import { CarouselPagination } from '@components/molecules'
import {
  SectionTitle,
  ProductSimpleCard,
  StartingAtWithAffirm
} from '@components/organisms'
import { Container, Row, Col } from '@components/containers'
import { PATHS } from '@temp/config'
import { useWindowSize } from '@hooks'
import { PRODUCTS_QUERY } from '@queries'

export interface IHomeCallToActionSectionProps {}

export const HomeCallToActionSection: FC<IHomeCallToActionSectionProps> = memo(
  () => {
    const productsQueryResult = useQuery(PRODUCTS_QUERY)
    const products = productsQueryResult?.data?.products ?? []
    const sortedProducts = useMemo(() => sortBy(products, 'id'), [products])

    const windowSize = useWindowSize()

    const sealSize = windowSize.width > 768 ? 150 : 110

    return (
      <section
        className="relative text-center pb-9 pt-21 md:pt-27"
        style={{ backgroundColor: '#f4f3f2' }}
      >
        <Container>
          <Image
            width={sealSize}
            height={sealSize}
            src="/images/100-day-home-trial-risk-free-colored.svg"
            className="mb-6 md:mb-3"
          />

          <SectionTitle className="mb-8 md:mb-12">
            Pick the right option for you
          </SectionTitle>

          {windowSize.width >= 768 ? (
            <Row className="mb-6">
              {sortedProducts?.map((product) => (
                <Col key={product.id} className="w-full md:w-1/3">
                  <ProductSimpleCard product={product} />
                </Col>
              ))}
            </Row>
          ) : (
            <Carousel
              cellSpacing={40}
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
              className="pb-8 mb-6"
            >
              {products?.map((product) => (
                <div key={product.id} className="pt-4">
                  <ProductSimpleCard product={product} />
                </div>
              ))}
            </Carousel>
          )}

          <ButtonLink
            href={PATHS.SHOP_PAGE}
            className="max-w-full mb-2 w-54 md:mb-3"
          >
            Buy Suvie
          </ButtonLink>

          <StartingAtWithAffirm />
        </Container>
      </section>
    )
  }
)

HomeCallToActionSection.displayName = 'HomeCallToActionSection'

export default HomeCallToActionSection

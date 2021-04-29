import { FC, memo, useMemo } from 'react'
import classNames from 'classnames'
import { useQuery } from '@apollo/client'

import { Wave, ButtonLink } from '@components/atoms'
import { SectionTitle } from '@components/organisms'
import { Container, Row, Col } from '@components/containers'
import { PATHS } from '@temp/config'
import { useWindowSize } from '@hooks'
import { PRODUCTS_QUERY } from '@queries'
import { getStartingPrices } from '@utils'

export interface IFinalCallToActionSectionProps {
  imageSrc?: string
  offsetX?: string
  offsetY?: string
  offsetXInMobile?: string
  offsetYInMobile?: string
}

export const FinalCallToActionSection: FC<IFinalCallToActionSectionProps> = memo(
  ({
    imageSrc = '/images/default-final-call-to-action-section-background.jpg',
    offsetX = 'center',
    offsetY = 'top',
    offsetXInMobile = 'right',
    offsetYInMobile = 'top'
  }: IFinalCallToActionSectionProps) => {
    const productsQueryResult = useQuery(PRODUCTS_QUERY)
    const products = productsQueryResult?.data?.products ?? []
    const prices = useMemo(() => getStartingPrices(products), [products])

    const windowSize = useWindowSize()

    return (
      <section
        className="text-center bg-secondary text-secondary md:text-white md:text-left md:pt-33 md:pb-39"
        style={{
          background:
            windowSize.width >= 768
              ? `url(${imageSrc}) ${offsetX} ${offsetY} / cover no-repeat`
              : ''
        }}
      >
        <div
          className="bg-secondary h-75 md:hidden"
          style={{
            background:
              windowSize.width < 768
                ? `url(${imageSrc}) ${offsetXInMobile} ${offsetYInMobile} / cover no-repeat`
                : ''
          }}
        />

        <Container
          className={classNames('relative pt-6 pb-16 md:py-0', {
            'bg-white': windowSize.width < 768
          })}
        >
          <div className="md:hidden">
            <Wave colorName="white" />
          </div>

          <Row>
            <Col className="w-full md:w-1/2">
              <SectionTitle alignMd="left" themeMd="dark" className="mb-4">
                Try Suvie in your home <br />
                for 100 days, no-risk.
              </SectionTitle>

              <div className="mb-5 md:mb-4">
                Start saving time and eating better today.
              </div>

              <div className="flex items-baseline justify-center mb-6 font-serif text-2xl font-normal gap-x-2 md:justify-start">
                <h3 className="font-normal">Starting at</h3>

                {prices?.price?.originalPrice > prices?.price?.price && (
                  <span
                    className="pl-2 pr-1 text-lg line-through"
                    aria-label="Deleted Original Price"
                  >
                    ${prices?.price?.originalPrice}
                  </span>
                )}

                <span role="none">${prices?.price?.price}</span>
              </div>

              <ButtonLink
                href={PATHS.SHOP_PAGE}
                className="max-w-full w-60 md:w-69"
              >
                Buy Now
              </ButtonLink>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
)

FinalCallToActionSection.displayName = 'FinalCallToActionSection'

export default FinalCallToActionSection

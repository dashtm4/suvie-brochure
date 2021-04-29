import { FC, memo, useMemo } from 'react'
import classNames from 'classnames'
import { useQuery } from '@apollo/client'
import sortBy from 'lodash/sortBy'

import { Container, Row, Col } from '@components/containers'
import { SectionTitle, ProductCard, FeaturesModal } from '@components/organisms'
import { useToggle } from '@hooks'
import { PRODUCTS_QUERY, SMART_MEALS_QUERY } from '@queries'
import { IProduct } from '@types'

import {
  TITLE,
  MODAL_LINK_TEXT,
  MODAL_TITLE,
  MODAL_SUBTITLE,
  FEATURES
} from './constants'

export interface IShopFirstSectionProps {}

export const ShopFirstSection: FC<IShopFirstSectionProps> = memo(() => {
  const [showModal, toggleModal] = useToggle(false)

  const productsQueryResult = useQuery(PRODUCTS_QUERY)
  const products = productsQueryResult?.data?.products ?? []
  const sortedProducts = useMemo(() => sortBy(products, 'id'), [products])

  const smartMealsQueryResult = useQuery(SMART_MEALS_QUERY)
  const smartMeals = smartMealsQueryResult?.data?.smartMeals ?? []

  return (
    <>
      <section className="pt-9 bg-quaternary pb-13 md:pt-13 md:pb-23">
        <Container>
          <SectionTitle level={1} className="mb-6 md:mb-4">
            {TITLE}
          </SectionTitle>

          <div className="mb-6 text-center md:mb-13">
            <button className="underline text-octonary" onClick={toggleModal}>
              {MODAL_LINK_TEXT}
            </button>
          </div>

          <Row>
            {sortedProducts?.map((product: IProduct) => (
              <Col
                key={product?.id}
                className={classNames('w-full mb-4 md:w-1/3 md:mb-0', {
                  'mt-4 md:mt-0': product?.recommended
                })}
              >
                <ProductCard product={product} smartMeals={smartMeals} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {showModal && (
        <FeaturesModal
          toggleModal={toggleModal}
          title={MODAL_TITLE}
          subtitle={MODAL_SUBTITLE}
          features={FEATURES}
        />
      )}
    </>
  )
})

ShopFirstSection.displayName = 'ShopFirstSection'

export default ShopFirstSection

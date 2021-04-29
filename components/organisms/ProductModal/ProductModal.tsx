import { FC, memo, MouseEvent, useMemo } from 'react'

import { ButtonLink } from '@components/atoms'
import { ProductCardProperties } from '@components/molecules'
import { ReviewsTotal, GalleryModal } from '@components/organisms'
import { ACCESSORIES_URL } from '@temp/config'
import { IProduct } from '@temp/types'

export interface IProductModalProps {
  product: IProduct
  toggleModal: (event: MouseEvent<HTMLElement>) => void
}

export const ProductModal: FC<IProductModalProps> = memo(
  ({ product, toggleModal }: IProductModalProps) => {
    const gallery = useMemo(
      () => product?.gallery?.map((image) => image?.url),
      [product]
    )

    return (
      <GalleryModal gallery={gallery} toggleModal={toggleModal}>
        <ReviewsTotal
          description={`${product?.rating?.numberOfReviews} reviews`}
          starsNumber={product?.rating?.starRating}
          className="mb-2"
        />
        <h3
          className="mb-3 font-serif font-medium tracking-tight font-secondary"
          style={{ fontSize: '2rem' }}
        >
          {product?.title}
        </h3>
        <div className="mb-5 text-quinary">
          Suvie is your time-saving 15-in-1 kitchen robot system.
        </div>
        <ProductCardProperties
          title="Includes"
          properties={product?.includes}
          className="mb-3 text-left"
        />
        <ProductCardProperties
          title="Accessories"
          properties={product?.accessories}
          className="mb-6 text-left"
        />
        <div className="mb-3 font-serif text-2xl font-normal">
          <div className="flex items-baseline font-serif text-2xl font-normal gap-x-2">
            {product?.price?.originalPrice && (
              <span
                className="text-xl line-through"
                style={{ color: '#6d6d6d' }}
                aria-label="Original Price"
              >
                ${product?.price?.originalPrice}
              </span>
            )}
            <span role="none">${product?.price?.price}</span>
          </div>
          <div className="font-serif text-2xl font-normal">
            ${product?.monthPrice?.price}/month*
          </div>
        </div>
        <ButtonLink
          href={product?.link || ACCESSORIES_URL}
          isExternal={true}
          className="w-full mb-3"
        >
          Buy now
        </ButtonLink>
        <div className="text-septenary">
          * {product?.note} Starting at 0% APR with Affirm.
        </div>
      </GalleryModal>
    )
  }
)

ProductModal.displayName = 'ProductModal'

export default ProductModal

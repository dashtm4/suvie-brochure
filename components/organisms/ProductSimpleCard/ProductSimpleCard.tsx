import { FC, memo } from 'react'
import classNames from 'classnames'

import {
  ProductCardBadge,
  ProductCardImage,
  ProductCardTitle
} from '@components/atoms'
import { IProduct } from '@temp/types'

export interface IProductSimpleCardProps {
  product: IProduct
}

export const ProductSimpleCard: FC<IProductSimpleCardProps> = memo(
  ({ product }: IProductSimpleCardProps) => (
    <div
      className={classNames(
        'bg-white rounded-xl relative w-80 max-w-full pt-6 pb-4 px-4 transition-shadow mx-auto hover:shadow-lg',
        { 'border-2 border-primary-default': product.recommended }
      )}
    >
      {product.recommended && <ProductCardBadge>Most popular</ProductCardBadge>}

      <ProductCardTitle>{product.title}</ProductCardTitle>

      {product.image?.url && (
        <ProductCardImage imageSrc={product.image?.url} alt={product.title} />
      )}

      <div className="font-serif text-2xl font-normal text-center text-secondary">
        <div className="flex items-baseline justify-center gap-x-2">
          {product?.price?.originalPrice && (
            <span
              className="text-xl line-through"
              style={{ color: '#6d6d6d' }}
              aria-label="Deleted Original Price"
            >
              ${product?.price?.originalPrice}
            </span>
          )}
          <span>${product?.price?.price}</span>
        </div>

        <div>
          or <span>${product?.monthPrice?.price}/month*</span>
        </div>
      </div>
    </div>
  )
)

ProductSimpleCard.displayName = 'ProductSimpleCard'

export default ProductSimpleCard

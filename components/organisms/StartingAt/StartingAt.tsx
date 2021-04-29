import { FC, memo, useMemo } from 'react'
import { useQuery } from '@apollo/client'

import { PRODUCTS_QUERY } from '@queries'
import { getStartingPrices } from '@utils'

export interface IStartingAtProps {
  showTitle?: boolean
  className?: string
}

export const StartingAt: FC<IStartingAtProps> = memo(
  ({ showTitle = true, className = '' }: IStartingAtProps) => {
    const productsQueryResult = useQuery(PRODUCTS_QUERY)
    const products = productsQueryResult?.data?.products ?? []
    const prices = useMemo(() => getStartingPrices(products), [products])

    return (
      <div className={className}>
        {showTitle && <div className="mb-1 text-xs">Starting at</div>}
        <div className="inline-flex items-baseline font-serif font-normal gap-x-2">
          {prices?.price?.originalPrice > prices?.price?.price && (
            <span
              className="text-lg line-through"
              aria-label="Deleted Original Price"
            >
              ${prices?.price?.originalPrice}
            </span>
          )}
          <span className="text-xl" aria-label="presentation">
            ${prices?.price?.price} or ${prices?.monthPrice?.price}
            /month
          </span>
        </div>
      </div>
    )
  }
)

StartingAt.displayName = 'StartingAt'

export default StartingAt

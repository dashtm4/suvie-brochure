import minBy from 'lodash/minBy'

import { IProduct } from '@types'

export const getStartingPrices = (products: IProduct[]) => {
  const cheapestProduct = minBy(products, 'price.price')

  return {
    price: cheapestProduct?.price,
    monthPrice: cheapestProduct?.monthPrice
  }
}

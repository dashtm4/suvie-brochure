import { IImage, IPrice } from '@types'

export interface ISmartMealsPlan {
  id: string
  title: string
  description: string
  price: IPrice
  note: string
  includes: {
    item: string
  }[]
  image: IImage
  gallery: IImage[]
  recommended?: boolean
}

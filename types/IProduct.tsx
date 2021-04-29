import { IImage, IMeta, IPrice, IRating } from '@types'

export interface IProduct {
  id: string
  title: string
  description: string
  image: IImage
  gallery: IImage[]
  price: IPrice
  monthPrice: IPrice
  includes: {
    item: string
  }[]
  accessories: {
    item: string
  }[]
  smartMeals: {
    status: string
    statusDescription?: string
  }
  meta: IMeta[]
  note?: string
  rating: IRating
  recommended: boolean
  link: string
}

import { IPrice, IImage } from '@types'

export interface ISmartMeals {
  id: string
  title: string
  description?: string
  plans: {
    item: string
  }[]
  price: IPrice
  note: string
  gallery: IImage[]
}

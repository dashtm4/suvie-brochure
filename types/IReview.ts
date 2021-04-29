import { IImage } from '@types'

export interface IReview {
  id: string
  name: string
  body: string
  image?: IImage
}

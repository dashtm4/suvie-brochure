import { IMediaObject } from '@types'

export interface IUnnormolizedMeal {
  /* eslint-disable camelcase */
  id: string
  meal_media_object: IMediaObject
  meal_meta: {
    calories: number
    prep_time: string
  }
  meal_type: {
    meal_type: string
  }
  meal_categories: {
    meal_category: string
  }[]
  meal_plate_image?: {
    url: string
  }
  /* eslint-enable camelcase */
}

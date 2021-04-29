import { IUnnormolizedMeal, IMeal } from '@types'

export const normalizeMeal = (meal: IUnnormolizedMeal): IMeal => ({
  id: meal?.id,
  title: meal?.meal_media_object?.mo_title_fields?.title,
  subtitle: meal?.meal_media_object?.mo_title_fields?.subtitle,
  description: meal?.meal_media_object?.mo_title_fields?.description,
  imageSrc: meal.meal_media_object.mo_icon?.url,
  videoSrc: meal?.meal_media_object?.mo_video?.video_url ?? '',
  posterSrc: meal?.meal_media_object?.mo_video?.video_poster?.url,
  type: getMealTypeName(meal?.meal_type?.meal_type),
  prepTime: meal?.meal_meta?.prep_time,
  calories: meal?.meal_meta?.calories,
  categories: meal?.meal_categories?.map((category) =>
    getMealCategoryName(category.meal_category)
  ),
  plateImageSrc: meal?.meal_plate_image?.url
})

export const getMealTypeName = (type: string) => {
  switch (type) {
    case 'smartmeals':
      return 'smart meals'
    case 'youringredients':
      return 'your ingredient'
  }
}

export const getMealCategoryName = (category: string) => {
  switch (category) {
    case 'certifiedbalanced':
      return 'certified balanced'
    case 'sousvide':
      return 'sous vide'
    case 'slowcook':
      return 'slow cook'
    default:
      return category
  }
}

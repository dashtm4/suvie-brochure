import { gql } from '@apollo/client'

export const MEAL_FIELDS = `
    id
    meal_media_object {
      mo_title_fields {
        title
        subtitle
        description
      }
      mo_video {
        video_url
        video_poster {
          url
        }
      }
      mo_icon {
        url
      }
      mo_label
    }
    meal_meta {
      calories
      prep_time
    }
    meal_type {
      meal_type
    }
    meal_categories {
      meal_category
    }
    meal_plate_image {
      url
    }
`

export const MEALS_QUERY = gql`
  query {
    meals: recipes {
      ${MEAL_FIELDS}
    }
  }
`

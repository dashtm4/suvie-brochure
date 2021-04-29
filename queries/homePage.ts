import { gql } from '@apollo/client'

import { MEAL_FIELDS, REVIEW_FIELDS } from '@queries'

export const HOME_PAGE_QUERY = gql`
  query {
    home_page: homePage {
      meals_list {
        meals: recipes {
          ${MEAL_FIELDS}
        }
      }
      reviews_list {
        reviews {
          ${REVIEW_FIELDS}
        }
      }
    }
  }
`

import { gql } from '@apollo/client'

import { FAQ_FIELDS, MEAL_FIELDS } from '@queries'

export const SMART_MEALS_PAGE_QUERY = gql`
  query {
    smart_meals_page: smartMealsPage {
      meals_list {
        meals: recipes {
          ${MEAL_FIELDS}
        }
      }
      faqs: faq {
        ${FAQ_FIELDS}
      }
    }
  }
`

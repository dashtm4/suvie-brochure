import { gql } from '@apollo/client'

import { FAQ_FIELDS, MEAL_FIELDS } from '@queries'

export const HEALTH_PAGE_QUERY = gql`
  query {
    health_page: healthPage {
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

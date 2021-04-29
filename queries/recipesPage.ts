import { gql } from '@apollo/client'

import { FAQ_FIELDS, MEAL_FIELDS } from '@queries'

export const RECIPES_PAGE_QUERY = gql`
  query {
    recipes_page: recipesPage {
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

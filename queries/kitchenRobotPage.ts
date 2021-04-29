import { gql } from '@apollo/client'

import { REVIEW_FIELDS } from '@queries'

export const KITCHEN_ROBOT_PAGE_QUERY = gql`
  query {
    kitchen_robot_page: kitchenRobotPage {
      reviews_list {
        reviews {
          ${REVIEW_FIELDS}
        }
      }
    }
  }
`

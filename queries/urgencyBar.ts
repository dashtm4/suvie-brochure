import { gql } from '@apollo/client'

export const URGENCY_BAR_QUERY = gql`
  query {
    urgencyBar {
      info {
        title
        subtitle
        description
      }
      percentage
    }
  }
`

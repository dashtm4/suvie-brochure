import { gql } from '@apollo/client'

export const COUNTDOWN_BANNER_QUERY = gql`
  query {
    countdownBanner {
      title
      subtitle
      endTime: end_time
    }
  }
`

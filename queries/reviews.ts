import { gql } from '@apollo/client'

export const REVIEW_FIELDS = `
  id
  name
  body
  image {
    url
  }
`

export const REVIEWS_QUERY = gql`
  query {
    reviews {
      ${REVIEW_FIELDS}
    }
  }
`

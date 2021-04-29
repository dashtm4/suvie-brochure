import { gql } from '@apollo/client'

export const FAQ_FIELDS = `
    id
    question
    body
`

export const FAQS_QUERY = gql`
  query {
    faqs: faq {
      ${FAQ_FIELDS}
    }
  }
`

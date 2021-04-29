import { gql } from '@apollo/client'

import { FAQ_FIELDS } from '@queries'

export const FAQ_PAGE_QUERY = gql`
  query {
    faq_page: faqPage {
      faqs: faq {
        ${FAQ_FIELDS}
      }
    }
  }
`

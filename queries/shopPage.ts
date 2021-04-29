import { gql } from '@apollo/client'

import { FAQ_FIELDS } from '@queries'

export const SHOP_PAGE_QUERY = gql`
  query {
    shop_page: shopPage {
      faqs: faq {
        ${FAQ_FIELDS}
      }
    }
  }
`

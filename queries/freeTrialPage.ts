import { gql } from '@apollo/client'

import { FAQ_FIELDS } from '@queries'

export const FREE_TRIAL_PAGE_QUERY = gql`
  query {
    free_trial_page: freeTrialPage {
      faqs: faq {
        ${FAQ_FIELDS}
      }
    }
  }
`

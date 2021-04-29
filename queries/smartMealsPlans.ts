import { gql } from '@apollo/client'

export const SMART_MEALS_PLANS_FIELDS = `
    id
    title
    description
    price {
      price
      originalPrice: original_price
    }
    note
    includes {
      item
    }
    image {
      url
    }
    gallery {
      url
    }
    recommended
`

export const SMART_MEALS_PLANS_QUERY = gql`
  query {
    smartMealsPlans {
      ${SMART_MEALS_PLANS_FIELDS}
    }
  }
`

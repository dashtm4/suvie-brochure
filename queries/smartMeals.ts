import { gql } from '@apollo/client'

export const SMART_MEALS_FIELDS = `
    id
    title
    description
    plans {
      item
    }
    price {
      price
      originalPrice: original_price
    }
    note
    gallery {
      url
    }
`

export const SMART_MEALS_QUERY = gql`
  query {
    smartMeals: smartMeal {
      ${SMART_MEALS_FIELDS}
    }
  }
`

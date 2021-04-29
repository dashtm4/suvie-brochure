import { gql } from '@apollo/client'

export const PRODUCT_FIELDS = `
    id
    title
    image {
      url
    }
    price {
      price
      originalPrice: original_price
    }
    monthPrice: month_price {
      price
      originalPrice: original_price
    }
    includes {
      item
    }
    accessories {
      item
    }
    meta {
      name
      value
    }
    note
    rating {
      starRating: star_rating
      numberOfReviews: number_of_reviews
    }
    description
    recommended
    link
    gallery {
      url
    }
    smartMeals: smart_meals {
      status
      statusDescription: status_description
    }
`

export const PRODUCTS_QUERY = gql`
  query {
    products {
      ${PRODUCT_FIELDS}
    }
  }
`

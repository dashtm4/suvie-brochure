import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ProductCard } from '.'

describe('<ProductCard />', () => {
  const product = {
    id: '1',
    title: 'Test title',
    description: 'Test description',
    image: {
      url: 'image.jpg'
    },
    gallery: [
      {
        url: 'image-1.jpg'
      },
      {
        url: 'image-2.jpg'
      }
    ],
    price: {
      price: 1000.0
    },
    monthPrice: {
      price: 50.0
    },
    includes: [{ item: 'Test include' }],
    accessories: [{ item: 'Test accessory' }],
    smartMeals: {
      status: 'Optional'
    },
    meta: [
      {
        name: 'Test name',
        value: 'Test value'
      }
    ],
    rating: {
      starRating: 5,
      numberOfReviews: 744
    },
    recommended: false,
    link: 'example.com'
  }

  const smartMeals = {
    id: '1',
    title: 'Test Smart Meals title',
    plans: [{ item: 'Test plan 1' }, { item: 'Test plan 2' }],
    price: {
      price: 10.0
    },
    note: 'Test note',
    gallery: [
      {
        url: 'image.jpg'
      }
    ]
  }

  it('should renders correct <ProductCard />', () => {
    const wrapper = shallow(
      <ProductCard product={product} smartMeals={smartMeals} />
    )

    expect(wrapper.contains('Most popular')).toBeFalsy()
    expect(wrapper.contains(product.title)).toBeTruthy()
    expect(wrapper.contains(product.price.price)).toBeTruthy()
    expect(wrapper.contains(product.monthPrice.price)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should display best value badge', () => {
    const recommended = true

    const wrapper = shallow(
      <ProductCard
        product={{ ...product, recommended }}
        smartMeals={smartMeals}
      />
    )

    expect(wrapper.contains('Most popular')).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

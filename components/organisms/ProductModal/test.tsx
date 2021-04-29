import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ProductModal } from '.'

describe('<ProductModal />', () => {
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

  it('should renders correct <ProductModal />', () => {
    const toggleModal = jest.fn()

    const wrapper = shallow(
      <ProductModal product={product} toggleModal={toggleModal} />
    )

    expect(wrapper.contains(product.title)).toBeTruthy()
    expect(wrapper.contains(product.price.price)).toBeTruthy()
    expect(wrapper.contains(product.monthPrice.price)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

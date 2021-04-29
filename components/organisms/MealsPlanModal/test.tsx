import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { MealsPlanModal } from '.'

describe('<MealsPlanModal />', () => {
  const smartMealsPlan = {
    id: '1',
    title: 'Test title',
    description: 'Test description',
    price: {
      price: 10
    },
    note: 'Test note',
    includes: [{ item: 'Item 1' }, { item: 'Item 2' }],
    image: {
      url: 'image.jpg'
    },
    gallery: [
      {
        url: 'image.jpg'
      }
    ],
    recommended: false
  }

  it('should renders correct <MealsPlanModal />', () => {
    const toggleModal = jest.fn()

    const wrapper = shallow(
      <MealsPlanModal
        smartMealsPlan={smartMealsPlan}
        toggleModal={toggleModal}
      />
    )

    expect(wrapper.contains(smartMealsPlan.title)).toBeTruthy()
    expect(wrapper.contains(smartMealsPlan.description)).toBeTruthy()
    expect(wrapper.contains(smartMealsPlan.price.price)).toBeTruthy()
    expect(wrapper.contains(smartMealsPlan.note)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

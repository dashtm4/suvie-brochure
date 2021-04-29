import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { SmartMealsModal } from '.'

describe('<SmartMealsModal />', () => {
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

  it('should renders correct <SmartMealsModal />', () => {
    const toggleModal = jest.fn()

    const wrapper = shallow(
      <SmartMealsModal smartMeals={smartMeals} toggleModal={toggleModal} />
    )

    expect(wrapper.contains(smartMeals.title)).toBeTruthy()
    expect(wrapper.contains(smartMeals.price.price)).toBeTruthy()
    expect(wrapper.contains(smartMeals.note)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

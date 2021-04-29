import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { MealsPlanCard } from '.'

describe('<MealsPlanCard />', () => {
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

  it('should renders correct <MealsPlanCard />', () => {
    const wrapper = shallow(<MealsPlanCard smartMealsPlan={smartMealsPlan} />)

    expect(wrapper.contains(smartMealsPlan.title)).toBeTruthy()
    expect(wrapper.contains(smartMealsPlan.description)).toBeTruthy()
    expect(wrapper.contains(smartMealsPlan.price.price)).toBeTruthy()
    expect(wrapper.contains(smartMealsPlan.note)).toBeTruthy()
    expect(wrapper.contains('Most popular')).toBeFalsy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should display most popular badge', () => {
    const recommended = true

    const wrapper = shallow(
      <MealsPlanCard smartMealsPlan={{ ...smartMealsPlan, recommended }} />
    )

    expect(wrapper.contains('Most Popular')).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

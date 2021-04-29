import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { MealCard } from '.'

describe('<MealCard />', () => {
  const meal = {
    id: 'bbq-salmon',
    title: 'BBQ Salmon',
    subtitle: 'with Southwest Brown Rice & Brussels Sprouts',
    imageSrc: 'bbq-salmon.jpg'
  }

  it('should renders correct <MealCard /> with minimum required meal fields', () => {
    const wrapper = shallow(<MealCard meal={meal} />)

    expect(wrapper.contains(meal.title)).toBeTruthy()
    expect(wrapper.contains(meal.subtitle)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should renders correct <MealCard /> with all meal fields', () => {
    const meal = {
      id: 'bbq-salmon',
      title: 'BBQ Salmon',
      subtitle: 'with Southwest Brown Rice & Brussels Sprouts',
      description: 'Test description.',
      imageSrc: 'bbq-salmon.jpg',
      videoSrc: 'bbq-salmon.avi',
      posterSrc: 'bbq-salmon.jpg',
      type: 'your ingredients',
      prepTime: '10 minutes',
      calories: 500,
      categories: ['Carb Conscious', 'Gluten Free'],
      plateImageSrc: 'bbq-salmon_meal.png'
    }

    const wrapper = shallow(<MealCard meal={meal} />)

    expect(wrapper.contains(meal.title)).toBeTruthy()
    expect(wrapper.contains(meal.subtitle)).toBeTruthy()
    expect(wrapper.contains(meal.type)).toBeTruthy()
    expect(wrapper.contains(meal.categories[0])).toBeTruthy()
    expect(wrapper.contains(meal.categories[1])).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { MealSecondaryCard } from '.'

describe('<MealSecondaryCard />', () => {
  const meal = {
    id: 'bbq-salmon',
    title: 'BBQ Salmon',
    subtitle: 'with Southwest Brown Rice & Brussels Sprouts',
    imageSrc: 'bbq-salmon.jpg'
  }

  it('should renders correct <MealSecondaryCard /> with minimum required meal fields', () => {
    const wrapper = shallow(<MealSecondaryCard meal={meal} />)

    expect(wrapper.contains(meal.title)).toBeTruthy()
    expect(wrapper.contains(meal.subtitle)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should renders correct <MealSecondaryCard /> with all meal fields', () => {
    const meal = {
      id: 'bbq-salmon',
      title: 'BBQ Salmon',
      subtitle: 'with Southwest Brown Rice & Brussels Sprouts',
      description: 'Test description.',
      imageSrc: 'bbq-salmon.jpg',
      videoSrc: 'bbq-salmon.avi',
      posterSrc: 'bbq-salmon.jpg',
      modalImageSrc: 'bbq-salmon_modal.png',
      type: 'your ingredients',
      prepTime: '10 minutes',
      calories: 500,
      categories: ['Carb Conscious', 'Gluten Free'],
      plateImageSrc: 'bbq-salmon_meal.png'
    }

    const wrapper = shallow(<MealSecondaryCard meal={meal} />)

    expect(wrapper.contains(meal.title)).toBeTruthy()
    expect(wrapper.contains(meal.subtitle)).toBeTruthy()
    expect(wrapper.contains(meal.calories)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should renders correct <MealSecondaryCard /> with certified balanced note', () => {
    const meal = {
      id: 'bbq-salmon',
      title: 'BBQ Salmon',
      subtitle: 'with Southwest Brown Rice & Brussels Sprouts',
      imageSrc: 'bbq-salmon.jpg',
      categories: ['Certified Balanced', 'Gluten Free']
    }

    const wrapper = shallow(<MealSecondaryCard meal={meal} />)

    expect(wrapper.contains('Certified Balanced')).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should renders correct <MealSecondaryCard /> with certified balanced note (certified balanced category is lower case)', () => {
    const meal = {
      id: 'bbq-salmon',
      title: 'BBQ Salmon',
      subtitle: 'with Southwest Brown Rice & Brussels Sprouts',
      imageSrc: 'bbq-salmon.jpg',
      categories: ['certified balanced', 'Gluten Free']
    }

    const wrapper = shallow(<MealSecondaryCard meal={meal} />)

    expect(wrapper.contains('Certified Balanced')).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should renders correct <MealSecondaryCard /> with correct className prop', () => {
    const className = 'mb-2'

    const wrapper = shallow(
      <MealSecondaryCard meal={meal} className={className} />
    )

    expect(wrapper.prop('className')).toContain(className)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

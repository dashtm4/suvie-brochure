import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { MealModal } from '.'

describe('<MealModal />', () => {
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

  it('should renders correct <MealModal />', () => {
    const toggleModal = jest.fn()

    const wrapper = shallow(<MealModal meal={meal} toggleModal={toggleModal} />)

    expect(wrapper.contains(meal.title)).toBeTruthy()
    expect(wrapper.contains(meal.description)).toBeTruthy()
    expect(wrapper.contains(meal.type)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has close button when showCTAButton prop is false', () => {
    const toggleModal = jest.fn()
    const showCTAButton = false

    const wrapper = shallow(
      <MealModal
        meal={meal}
        toggleModal={toggleModal}
        showCTAButton={showCTAButton}
      />
    )

    expect(wrapper.contains('Close Window')).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has CTA button with correct text when showCTAButton prop is true', () => {
    const toggleModal = jest.fn()
    const showCTAButton = true

    const wrapper = shallow(
      <MealModal
        meal={meal}
        toggleModal={toggleModal}
        showCTAButton={showCTAButton}
      />
    )

    expect(wrapper.contains('View Recipe')).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has CTA button with correct text when showCTAButton prop is true', () => {
    const toggleModal = jest.fn()
    const showCTAButton = true

    const wrapper = shallow(
      <MealModal
        meal={{ ...meal, type: 'smart meals' }}
        toggleModal={toggleModal}
        showCTAButton={showCTAButton}
      />
    )

    expect(wrapper.contains('Explore Smart Meals')).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

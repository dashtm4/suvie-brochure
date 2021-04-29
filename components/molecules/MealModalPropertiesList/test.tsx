import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { MealModalPropertiesList } from '.'

describe('<MealModalPropertiesList />', () => {
  const children = 'Test children'

  it('should renders correct <MealModalPropertiesList />', () => {
    const wrapper = shallow(
      <MealModalPropertiesList>{children}</MealModalPropertiesList>
    )

    expect(wrapper.contains(children)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

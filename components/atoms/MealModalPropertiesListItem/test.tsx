import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { MealModalPropertiesListItem } from '.'

describe('<MealModalPropertiesListItem />', () => {
  const name = 'Test name'
  const value = 'Test value'

  it('should renders correct <MealModalPropertiesListItem />', () => {
    const wrapper = shallow(
      <MealModalPropertiesListItem name={name} value={value} />
    )

    expect(wrapper.contains(name)).toBeTruthy()
    expect(wrapper.contains(value)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { SmartMealsTemplate } from '.'

describe('<SmartMealsTemplate />', () => {
  it('should renders correct <SmartMealsTemplate />', () => {
    const wrapper = shallow(<SmartMealsTemplate />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { SmartMealsSecondSection } from '.'

describe('<SmartMealsSecondSection />', () => {
  it('should renders correct <SmartMealsSecondSection />', () => {
    const wrapper = shallow(<SmartMealsSecondSection />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

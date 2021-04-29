import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { KitchenRobotSecondSection } from '.'

describe('<KitchenRobotSecondSection />', () => {
  it('should renders correct <KitchenRobotSecondSection />', () => {
    const wrapper = shallow(<KitchenRobotSecondSection />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

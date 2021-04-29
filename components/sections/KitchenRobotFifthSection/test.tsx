import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { KitchenRobotFifthSection } from '.'

describe('<KitchenRobotFifthSection />', () => {
  it('should renders correct <KitchenRobotFifthSection />', () => {
    const wrapper = shallow(<KitchenRobotFifthSection />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

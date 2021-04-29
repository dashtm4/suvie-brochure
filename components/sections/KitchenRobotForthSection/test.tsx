import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { KitchenRobotForthSection } from '.'

describe('<KitchenRobotForthSection />', () => {
  it('should renders correct <KitchenRobotForthSection />', () => {
    const wrapper = shallow(<KitchenRobotForthSection />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

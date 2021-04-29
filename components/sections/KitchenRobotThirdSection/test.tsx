import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { KitchenRobotThirdSection } from '.'

describe('<KitchenRobotThirdSection />', () => {
  it('should renders correct <KitchenRobotThirdSection />', () => {
    const wrapper = shallow(<KitchenRobotThirdSection />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

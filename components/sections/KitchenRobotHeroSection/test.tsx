import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { KitchenRobotHeroSection } from '.'

describe('<KitchenRobotHeroSection />', () => {
  it('should renders correct <KitchenRobotHeroSection />', () => {
    const wrapper = shallow(<KitchenRobotHeroSection />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

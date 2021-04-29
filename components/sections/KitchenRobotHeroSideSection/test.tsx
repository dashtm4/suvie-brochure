import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { KitchenRobotHeroSideSection } from '.'

describe('<KitchenRobotHeroSideSection />', () => {
  it('should renders correct <KitchenRobotHeroSideSection />', () => {
    const wrapper = shallow(<KitchenRobotHeroSideSection />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

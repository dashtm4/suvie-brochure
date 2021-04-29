import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { HomeExploreKitchenRobotSection } from '.'

describe('<HomeExploreKitchenRobotSection />', () => {
  it('should renders correct <HomeExploreKitchenRobotSection />', () => {
    const wrapper = shallow(<HomeExploreKitchenRobotSection />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

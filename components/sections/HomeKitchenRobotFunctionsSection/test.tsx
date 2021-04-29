import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { HomeKitchenRobotFunctionsSection } from '.'

describe('<HomeKitchenRobotFunctionsSection />', () => {
  it('should renders correct <HomeKitchenRobotFunctionsSection />', () => {
    const wrapper = shallow(<HomeKitchenRobotFunctionsSection />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

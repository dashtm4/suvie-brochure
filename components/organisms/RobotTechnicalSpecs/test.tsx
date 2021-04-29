import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { RobotTechnicalSpecs } from '.'

describe('<RobotTechnicalSpecs />', () => {
  it('should renders correct <RobotTechnicalSpecs />', () => {
    const wrapper = shallow(<RobotTechnicalSpecs />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

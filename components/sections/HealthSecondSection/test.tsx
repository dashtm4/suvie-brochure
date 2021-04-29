import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { HealthSecondSection } from '.'

describe('<HealthSecondSection />', () => {
  it('should renders correct <HealthSecondSection />', () => {
    const wrapper = shallow(<HealthSecondSection />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

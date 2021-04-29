import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { FreeTrialHeroSection } from '.'

describe('<FreeTrialHeroSection />', () => {
  it('should renders correct <FreeTrialHeroSection />', () => {
    const wrapper = shallow(<FreeTrialHeroSection />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

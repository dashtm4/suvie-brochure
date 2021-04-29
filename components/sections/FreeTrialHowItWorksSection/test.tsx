import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { FreeTrialHowItWorksSection } from '.'

describe('<FreeTrialHowItWorksSection />', () => {
  it('should renders correct <FreeTrialHowItWorksSection />', () => {
    const wrapper = shallow(<FreeTrialHowItWorksSection />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { FreeTrialSecondSection } from '.'

describe('<FreeTrialSecondSection />', () => {
  it('should renders correct <FreeTrialSecondSection />', () => {
    const wrapper = shallow(<FreeTrialSecondSection />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { FreeTrialGetInTouchSection } from '.'

describe('<FreeTrialGetInTouchSection />', () => {
  it('should renders correct <FreeTrialGetInTouchSection />', () => {
    const wrapper = shallow(<FreeTrialGetInTouchSection />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

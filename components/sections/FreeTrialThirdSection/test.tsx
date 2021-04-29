import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { FreeTrialThirdSection } from '.'

describe('<FreeTrialThirdSection />', () => {
  it('should renders correct <FreeTrialThirdSection />', () => {
    const wrapper = shallow(<FreeTrialThirdSection />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

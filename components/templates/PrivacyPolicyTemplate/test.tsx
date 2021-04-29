import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { PrivacyPolicyTemplate } from '.'

describe('<PrivacyPolicyTemplate />', () => {
  it('should renders correct <PrivacyPolicyTemplate />', () => {
    const wrapper = shallow(<PrivacyPolicyTemplate />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { TermsAndConditionsTemplate } from '.'

describe('<TermsAndConditionsTemplate />', () => {
  it('should renders correct <TermsAndConditionsTemplate />', () => {
    const wrapper = shallow(<TermsAndConditionsTemplate />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

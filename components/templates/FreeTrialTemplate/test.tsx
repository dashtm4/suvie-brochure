import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { FreeTrialTemplate } from '.'

describe('<FreeTrialTemplate />', () => {
  it('should renders correct <FreeTrialTemplate />', () => {
    const wrapper = shallow(<FreeTrialTemplate />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

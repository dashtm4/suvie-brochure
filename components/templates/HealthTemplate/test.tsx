import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { HealthTemplate } from '.'

describe('<HealthTemplate />', () => {
  it('should renders correct <HealthTemplate />', () => {
    const wrapper = shallow(<HealthTemplate />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

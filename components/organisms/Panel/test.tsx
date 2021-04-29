import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Panel } from '.'

describe('<Panel />', () => {
  it('should renders correct <Panel />', () => {
    const wrapper = shallow(<Panel />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

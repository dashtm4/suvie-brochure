import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { SimpleSiteHeader } from '.'

describe('<SimpleSiteHeader />', () => {
  it('should renders correct <SimpleSiteFooter />', () => {
    const wrapper = shallow(<SimpleSiteHeader />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

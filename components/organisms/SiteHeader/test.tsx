import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { SiteHeader } from '.'

describe('<SiteHeader />', () => {
  it('should renders correct <SiteHeader />', () => {
    const wrapper = shallow(<SiteHeader />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { FOOTER_COPY } from '@temp/config'

import { SimpleSiteFooter } from '.'

describe('<SimpleSiteFooter />', () => {
  it('should renders correct <SimpleSiteFooter />', () => {
    const wrapper = shallow(<SimpleSiteFooter />)

    expect(wrapper.contains(FOOTER_COPY)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

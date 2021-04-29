import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { FOOTER_COPY } from '@temp/config'

import { SiteFooter } from '.'

describe('<SiteFooter />', () => {
  it('should renders correct <SiteFooter />', () => {
    const wrapper = shallow(<SiteFooter />)

    expect(wrapper.contains(FOOTER_COPY)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

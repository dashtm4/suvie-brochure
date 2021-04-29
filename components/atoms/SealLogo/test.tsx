import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { SealLogo } from '.'

import { PATHS } from '@temp/config'

describe('<SealLogo />', () => {
  it('should render correct <SealLogo />', () => {
    const wrapper = shallow(<SealLogo />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should render correct a tag', () => {
    const wrapper = shallow(<SealLogo />)

    expect(wrapper.html()).toContain(`<a class="block" href="${PATHS.BASE}"`)
  })
})

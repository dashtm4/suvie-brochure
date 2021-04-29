import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { MainLogo } from '.'

import { PATHS } from '@temp/config'

describe('<MainLogo />', () => {
  it('should render correct <MainLogo />', () => {
    const wrapper = shallow(<MainLogo />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should render correct a tag', () => {
    const wrapper = shallow(<MainLogo />)

    expect(wrapper.html()).toContain(
      `<a class="flex items-center xl:mr-6" href="${PATHS.BASE}"`
    )
  })
})

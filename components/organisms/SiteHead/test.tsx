import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { META_DEFAULTS } from '@temp/config'

import { SiteHead } from '.'

describe('<SiteHead />', () => {
  it('should renders correct <SiteHead />', () => {
    const wrapper = shallow(<SiteHead />)

    expect(
      wrapper
        .find('title')
        .contains(`${META_DEFAULTS.title} | ${META_DEFAULTS.description}`)
    ).toBeTruthy()
    expect(wrapper.find('meta[name="description"]').prop('content')).toMatch(
      META_DEFAULTS.description
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should renders correct <SiteHead /> with custom title', () => {
    const title = 'Test test'

    const wrapper = shallow(<SiteHead title={title} />)

    expect(wrapper.find('title').text()).toMatch(
      `${title} | ${META_DEFAULTS.title}`
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should renders correct <SiteHead /> with custom description', () => {
    const description = 'Test description'

    const wrapper = shallow(<SiteHead description={description} />)

    expect(wrapper.find('meta[name="description"]').prop('content')).toMatch(
      description
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

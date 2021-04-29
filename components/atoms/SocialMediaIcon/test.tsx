import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { SocialMediaIcon } from '.'

describe('<SocialMediaIcon />', () => {
  const socialMedia = {
    title: 'Facebook',
    url: 'https://www.facebook.com/SuvieFood/',
    icon: '/images/facebook-icon.svg'
  }

  it('should render correct a tag', () => {
    const wrapper = shallow(<SocialMediaIcon socialMedia={socialMedia} />)

    expect(wrapper.html()).toContain(
      `<a href="${socialMedia.url}" aria-label="${socialMedia.title} - opens in new window" target="_blank" rel="noreferrer"`
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should render correct html with correct target attribute', () => {
    const target = '_parent'

    const wrapper = shallow(
      <SocialMediaIcon socialMedia={socialMedia} target={target} />
    )

    expect(wrapper.html()).toContain(
      `<a href="${socialMedia.url}" aria-label="${socialMedia.title}" target="${target}" rel="noreferrer"`
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should render correct html with correct rel attribute', () => {
    const rel = 'help'

    const wrapper = shallow(
      <SocialMediaIcon socialMedia={socialMedia} rel={rel} />
    )

    expect(wrapper.html()).toContain(
      `<a href="${socialMedia.url}" aria-label="${socialMedia.title} - opens in new window" target="_blank" rel="${rel}"`
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should contain img', () => {
    const wrapper = shallow(<SocialMediaIcon socialMedia={socialMedia} />)

    expect(wrapper.html()).toContain('<img')
  })
})

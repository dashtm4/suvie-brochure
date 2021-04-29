import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { MainNavItem } from '.'

describe('<MainNavItem />', () => {
  it('should render correct html with default props', () => {
    const title = 'Test title'
    const url = '/'

    const wrapper = shallow(<MainNavItem title={title} url={url} />)

    expect(wrapper.contains(title)).toBeTruthy()
    expect(wrapper.find('Link').prop('href')).toMatch(url)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should render correct html of external link', () => {
    const title = 'Test title'
    const url = '/'
    const external = true

    const wrapper = shallow(
      <MainNavItem title={title} url={url} external={external} />
    )

    expect(wrapper.contains(title)).toBeTruthy()
    expect(wrapper.find('a').prop('href')).toMatch(url)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should render correct html of external link with correct target attribute', () => {
    const title = 'Test title'
    const url = '/'
    const external = true
    const target = '_parent'

    const wrapper = shallow(
      <MainNavItem
        title={title}
        url={url}
        external={external}
        target={target}
      />
    )

    expect(wrapper.find('a').prop('target')).toMatch(target)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should render correct html of external link with correct rel attribute', () => {
    const title = 'Test title'
    const url = '/'
    const external = true
    const rel = 'help'

    const wrapper = shallow(
      <MainNavItem title={title} url={url} external={external} rel={rel} />
    )

    expect(wrapper.find('a').prop('rel')).toMatch(rel)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct className without smallOnMobile prop', () => {
    const title = 'Test title'
    const url = '/'

    const wrapper = shallow(<MainNavItem title={title} url={url} />)

    expect(wrapper.prop('className')).toContain('text-4xl')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct className with smallOnMobile prop', () => {
    const title = 'Test title'
    const url = '/'
    const isSmallOnMobile = true

    const wrapper = shallow(
      <MainNavItem title={title} url={url} smallOnMobile={isSmallOnMobile} />
    )

    expect(wrapper.prop('className')).toContain('text-lg')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

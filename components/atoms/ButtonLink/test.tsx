import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ButtonLink } from '.'

describe('<ButtonLink />', () => {
  const children = 'Test children'
  const href = 'http://test.com'

  it('should renders correct <ButtonLink />', () => {
    const wrapper = shallow(<ButtonLink href={href}>{children}</ButtonLink>)

    expect(wrapper.contains(children)).toBeTruthy()
    expect(wrapper.find('Link')).toBeTruthy()
    expect(wrapper.prop('href')).toContain(href)
    expect(wrapper.find('a').prop('className')).toContain('btn btn_primary')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct className with primary theme', () => {
    const theme = 'primary'
    const wrapper = shallow(
      <ButtonLink href={href} theme={theme}>
        {children}
      </ButtonLink>
    )

    expect(wrapper.find('a').prop('className')).toContain('btn btn_primary')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct className from className prop', () => {
    const className = 'test-class-name'

    const wrapper = shallow(
      <ButtonLink href={href} className={className}>
        {children}
      </ButtonLink>
    )

    expect(wrapper.find('a').prop('className')).toContain(className)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should render external link', () => {
    const isExternal = true

    const wrapper = shallow(
      <ButtonLink href={href} isExternal={isExternal}>
        {children}
      </ButtonLink>
    )

    expect(wrapper.find('a')).toBeTruthy()
    expect(wrapper.find('a').prop('href')).toContain(href)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has external link with correct className with primary theme', () => {
    const isExternal = true
    const theme = 'primary'

    const wrapper = shallow(
      <ButtonLink href={href} isExternal={isExternal} theme={theme}>
        {children}
      </ButtonLink>
    )

    expect(wrapper.find('a').prop('className')).toContain('btn btn_primary')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has external link with correct className with outline-rounded theme', () => {
    const isExternal = true
    const theme = 'outline-rounded'

    const wrapper = shallow(
      <ButtonLink href={href} isExternal={isExternal} theme={theme}>
        {children}
      </ButtonLink>
    )

    expect(wrapper.find('a').prop('className')).toContain(
      'btn btn_outline-rounded'
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has external link with correct className from className prop', () => {
    const isExternal = true
    const className = 'test-class-name'

    const wrapper = shallow(
      <ButtonLink href={href} isExternal={isExternal} className={className}>
        {children}
      </ButtonLink>
    )

    expect(wrapper.find('a').prop('className')).toContain(className)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

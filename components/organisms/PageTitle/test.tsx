import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { PageTitle } from '.'

describe('<PageTitle />', () => {
  const children = 'Test children'

  it('should renders correct <PageTitle />', () => {
    const wrapper = shallow(<PageTitle>{children}</PageTitle>)

    expect(wrapper.contains(children)).toBeTruthy()
    expect(wrapper.prop('className')).toContain('text-white')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct className with light theme', () => {
    const theme = 'light'
    const wrapper = shallow(<PageTitle theme={theme}>{children}</PageTitle>)

    expect(wrapper.prop('className')).toContain('text-white')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct className with dark theme', () => {
    const theme = 'dark'
    const wrapper = shallow(<PageTitle theme={theme}>{children}</PageTitle>)

    expect(wrapper.prop('className')).toContain('text-secondary')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct default font size class names', () => {
    const wrapper = shallow(<PageTitle>{children}</PageTitle>)

    expect(wrapper.prop('className')).toContain('text-4xl md:text-7xl')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct className from fontSizeClassName prop', () => {
    const fontSizeClassName = 'test-font-size-class-name'

    const wrapper = shallow(
      <PageTitle fontSizeClassName={fontSizeClassName}>{children}</PageTitle>
    )

    expect(wrapper.prop('className')).toContain(fontSizeClassName)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct className from prop', () => {
    const className = 'test-class-name'
    const wrapper = shallow(
      <PageTitle className={className}>{children}</PageTitle>
    )

    expect(wrapper.prop('className')).toContain(className)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

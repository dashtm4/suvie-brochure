import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { SectionTitle } from '.'

describe('<SectionTitle />', () => {
  const children = 'Test children'

  it('should renders correct <SectionTitle />', () => {
    const wrapper = shallow(<SectionTitle>{children}</SectionTitle>)

    expect(wrapper.contains(children)).toBeTruthy()
    expect(wrapper.prop('className')).toContain('text-secondary')
    expect(wrapper.prop('className')).toContain('text-center')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct className with dark theme prop', () => {
    const theme = 'dark'

    const wrapper = shallow(
      <SectionTitle theme={theme}>{children}</SectionTitle>
    )

    expect(wrapper.prop('className')).toContain('text-white')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct className with light theme prop', () => {
    const theme = 'light'

    const wrapper = shallow(
      <SectionTitle theme={theme}>{children}</SectionTitle>
    )

    expect(wrapper.prop('className')).toContain('text-secondary')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct className with dark themeMd prop', () => {
    const themeMd = 'dark'

    const wrapper = shallow(
      <SectionTitle themeMd={themeMd}>{children}</SectionTitle>
    )

    expect(wrapper.prop('className')).toContain('md:text-white')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct className with light themeMd prop', () => {
    const themeMd = 'light'

    const wrapper = shallow(
      <SectionTitle themeMd={themeMd}>{children}</SectionTitle>
    )

    expect(wrapper.prop('className')).toContain('md:text-secondary')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct className with align left prop', () => {
    const align = 'left'

    const wrapper = shallow(
      <SectionTitle align={align}>{children}</SectionTitle>
    )

    expect(wrapper.prop('className')).toContain('text-left')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct className with align center prop', () => {
    const align = 'center'

    const wrapper = shallow(
      <SectionTitle align={align}>{children}</SectionTitle>
    )

    expect(wrapper.prop('className')).toContain('text-center')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct className with align right prop', () => {
    const align = 'right'

    const wrapper = shallow(
      <SectionTitle align={align}>{children}</SectionTitle>
    )

    expect(wrapper.prop('className')).toContain('text-right')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct className with alignMd left prop', () => {
    const alignMd = 'left'

    const wrapper = shallow(
      <SectionTitle alignMd={alignMd}>{children}</SectionTitle>
    )

    expect(wrapper.prop('className')).toContain('md:text-left')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct className with alignMd center prop', () => {
    const alignMd = 'center'

    const wrapper = shallow(
      <SectionTitle alignMd={alignMd}>{children}</SectionTitle>
    )

    expect(wrapper.prop('className')).toContain('md:text-center')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct className with alignMd right prop', () => {
    const alignMd = 'right'

    const wrapper = shallow(
      <SectionTitle alignMd={alignMd}>{children}</SectionTitle>
    )

    expect(wrapper.prop('className')).toContain('md:text-right')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has className from fontSizeClassName prop', () => {
    const fontSizeClassName = 'test-font-size-class-name'

    const wrapper = shallow(
      <SectionTitle fontSizeClassName={fontSizeClassName}>
        {children}
      </SectionTitle>
    )

    expect(wrapper.prop('className')).toContain(fontSizeClassName)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has className from className prop', () => {
    const className = 'test-class-name'

    const wrapper = shallow(
      <SectionTitle className={className}>{children}</SectionTitle>
    )

    expect(wrapper.prop('className')).toContain(className)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

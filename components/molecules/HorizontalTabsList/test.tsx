import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { HorizontalTabsList } from '.'

describe('<HorizontalTabsList />', () => {
  const children = 'Test children'

  it('should renders correct <HorizontalTabsList />', () => {
    const wrapper = shallow(<HorizontalTabsList>{children}</HorizontalTabsList>)

    expect(wrapper.contains(children)).toBeTruthy()
    expect(wrapper.prop('className')).toContain('border-white')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct className with light theme', () => {
    const theme = 'light'

    const wrapper = shallow(
      <HorizontalTabsList theme={theme}>{children}</HorizontalTabsList>
    )

    expect(wrapper.prop('className')).toContain('border-black')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

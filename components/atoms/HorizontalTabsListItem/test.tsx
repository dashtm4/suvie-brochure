import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { HorizontalTabsListItem } from '.'

describe('<HorizontalTabsListItem />', () => {
  const children = 'Test children'

  it('should renders correct <HorizontalTabsListItem />', () => {
    const wrapper = shallow(
      <HorizontalTabsListItem>{children}</HorizontalTabsListItem>
    )

    expect(wrapper.contains(children)).toBeTruthy()
    expect(wrapper.prop('className')).toContain('text-white')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct className with light theme', () => {
    const theme = 'light'

    const wrapper = shallow(
      <HorizontalTabsListItem theme={theme}>{children}</HorizontalTabsListItem>
    )

    expect(wrapper.prop('className')).toContain('text-black')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

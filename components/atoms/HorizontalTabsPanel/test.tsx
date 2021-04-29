import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { HorizontalTabsPanel } from '.'

describe('<HorizontalTabsPanel />', () => {
  const children = 'Test children'

  it('should renders correct <HorizontalTabsPanel />', () => {
    const wrapper = shallow(
      <HorizontalTabsPanel>{children}</HorizontalTabsPanel>
    )

    expect(wrapper.contains(children)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

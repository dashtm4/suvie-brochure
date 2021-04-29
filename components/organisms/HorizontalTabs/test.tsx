import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { HorizontalTabs } from '.'

describe('<HorizontalTabs />', () => {
  const selectedIndex = 0
  const children = 'Test children'
  const onSelect = jest.fn()

  it('should renders correct <HorizontalTabs />', () => {
    const wrapper = shallow(
      <HorizontalTabs selectedIndex={selectedIndex} onSelect={onSelect}>
        {children}
      </HorizontalTabs>
    )

    expect(wrapper.contains(children)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

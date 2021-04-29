import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Popover } from '.'

describe('<Popover />', () => {
  const children = 'Test children'

  it('should renders correct <Popover />', () => {
    const wrapper = shallow(<Popover>{children}</Popover>)

    expect(wrapper.contains(children)).toBeTruthy()
    expect(wrapper.prop('className')).toContain('bottom-8 right-0')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct className from className prop', () => {
    const className = 'test-class-name'

    const wrapper = shallow(<Popover className={className}>{children}</Popover>)

    expect(wrapper.prop('className')).toContain(className)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

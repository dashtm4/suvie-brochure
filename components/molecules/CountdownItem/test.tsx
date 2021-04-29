import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { CountdownItem } from '.'

describe('<CountdownItem />', () => {
  const children = 'Test children'

  it('should renders correct <CountdownItem />', () => {
    const wrapper = shallow(<CountdownItem>{children}</CountdownItem>)

    expect(wrapper.contains(children)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

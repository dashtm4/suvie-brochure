import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { CountdownItemValue } from '.'

describe('<CountdownItemValue />', () => {
  const children = 'Test children'

  it('should renders correct <CountdownItemValue />', () => {
    const wrapper = shallow(<CountdownItemValue>{children}</CountdownItemValue>)

    expect(wrapper.contains(children)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

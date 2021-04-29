import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { CountdownItemName } from '.'

describe('<CountdownItemName />', () => {
  const children = 'Test children'

  it('should renders correct <CountdownItemName />', () => {
    const wrapper = shallow(<CountdownItemName>{children}</CountdownItemName>)

    expect(wrapper.contains(children)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { FooterMenuTitle } from '.'

describe('<FooterMenuTitle />', () => {
  it('should renders children', () => {
    const text = 'test'

    const wrapper = shallow(<FooterMenuTitle>{text}</FooterMenuTitle>)

    expect(wrapper.text()).toMatch(text)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

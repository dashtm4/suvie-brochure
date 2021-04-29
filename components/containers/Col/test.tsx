import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Col } from '.'

describe('<Col />', () => {
  it('should renders children', () => {
    const text = 'test'

    const wrapper = shallow(<Col>{text}</Col>)

    expect(wrapper.text()).toMatch(text)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should render correct html with default props', () => {
    const text = 'test'

    const wrapper = shallow(<Col>{text}</Col>)

    expect(wrapper.html()).toMatch(`<div class="px-3 w-full">${text}</div>`)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should render correct html with not default className prop', () => {
    const text = 'test'

    const wrapper = shallow(<Col className="mb-10">{text}</Col>)

    expect(wrapper.html()).toMatch(`<div class="px-3 mb-10">${text}</div>`)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

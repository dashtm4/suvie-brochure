import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Row } from '.'

describe('<Row />', () => {
  it('should renders children', () => {
    const text = 'test'

    const wrapper = shallow(<Row>{text}</Row>)

    expect(wrapper.text()).toMatch(text)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should render correct html with default props', () => {
    const text = 'test'

    const wrapper = shallow(<Row>{text}</Row>)

    expect(wrapper.html()).toMatch(
      `<div class="flex flex-wrap -mx-3 ">${text}</div>`
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should render correct html with not default className prop', () => {
    const text = 'test'

    const wrapper = shallow(<Row className="mb-10">{text}</Row>)

    expect(wrapper.html()).toMatch(
      `<div class="flex flex-wrap -mx-3 mb-10">${text}</div>`
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

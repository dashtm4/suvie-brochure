import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Container } from '.'

describe('<Container />', () => {
  it('should renders children', () => {
    const text = 'test'

    const wrapper = shallow(<Container>{text}</Container>)

    expect(wrapper.text()).toMatch(text)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should render correct html with default props', () => {
    const text = 'test'

    const wrapper = shallow(<Container>{text}</Container>)

    expect(wrapper.html()).toMatch(
      `<div class="container px-3 mx-auto max-w-screen-xl">${text}</div>`
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should render correct html with not default className prop', () => {
    const text = 'test'

    const wrapper = shallow(<Container className="mb-10">{text}</Container>)

    expect(wrapper.html()).toMatch(
      `<div class="container px-3 mx-auto mb-10">${text}</div>`
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

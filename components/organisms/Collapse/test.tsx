import { shallow, mount } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Collapse } from '.'

describe('<Collapse />', () => {
  const title = 'Test title'
  const children = 'Test children'

  it('should renders correct <Collapse />', () => {
    const wrapper = shallow(<Collapse title={title}>{children}</Collapse>)

    expect(wrapper.contains(title)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should expand <Collapse /> on button click', () => {
    const wrapper = mount(<Collapse title={title}>{children}</Collapse>)

    expect(wrapper.find('.article').first().prop('className')).toContain(
      'hidden'
    )

    wrapper.find('button').simulate('click')

    expect(wrapper.find('.article').first().prop('className')).not.toContain(
      'hidden'
    )

    wrapper.find('button').simulate('click')

    expect(wrapper.find('.article').first().prop('className')).toContain(
      'hidden'
    )
  })
})

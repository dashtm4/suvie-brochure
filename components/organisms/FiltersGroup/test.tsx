import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { FiltersGroup } from '.'

describe('<FiltersGroup />', () => {
  const children = 'Test children'

  it('should renders correct <FiltersGroup />', () => {
    const wrapper = shallow(<FiltersGroup>{children}</FiltersGroup>)

    expect(wrapper.contains(children)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct className from className prop', () => {
    const className = 'test-classname'

    const wrapper = shallow(
      <FiltersGroup className={className}>{children}</FiltersGroup>
    )

    expect(wrapper.prop('className')).toContain(className)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { MenuToggleButton } from '.'

describe('<MenuToggleButton />', () => {
  it('should render correct html with default props', () => {
    const onButtonClick = jest.fn()

    const wrapper = shallow(<MenuToggleButton onButtonClick={onButtonClick} />)

    expect(wrapper.html()).toContain(
      '<button aria-label="Toggle Menu" class="h-full mr-4 xl:hidden focus:outline-none focus:shadow-outline"'
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should simulates click events', () => {
    const onButtonClick = jest.fn()

    const wrapper = shallow(<MenuToggleButton onButtonClick={onButtonClick} />)

    wrapper.simulate('click')

    expect(onButtonClick).toHaveBeenCalledTimes(1)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

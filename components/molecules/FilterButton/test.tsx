import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { FilterButton } from '.'

describe('<FilterButton />', () => {
  const name = 'Test name'
  const description = 'Test description'
  const isCurrent = false

  it('should renders correct <FilterButton />', () => {
    const handleClick = jest.fn()

    const wrapper = shallow(
      <FilterButton
        name={name}
        description={description}
        isCurrent={isCurrent}
        handleClick={handleClick}
      />
    )

    expect(wrapper.contains(name)).toBeTruthy()
    expect(wrapper.prop('className')).not.toContain('text-white bg-secondary')

    wrapper.simulate('click')

    expect(handleClick).toHaveBeenCalledTimes(1)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct className with isCurrent true prop', () => {
    const handleClick = jest.fn()
    const isCurrent = true

    const wrapper = shallow(
      <FilterButton
        name={name}
        description={description}
        isCurrent={isCurrent}
        handleClick={handleClick}
      />
    )

    expect(wrapper.prop('className')).toContain('text-white bg-secondary')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

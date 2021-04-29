import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { CloseButton } from '.'

describe('<CloseButton />', () => {
  it('should renders correct <CloseButton />', () => {
    const onButtonClick = jest.fn()

    const wrapper = shallow(<CloseButton handleClick={onButtonClick} />)

    wrapper.find('button').simulate('click')

    expect(onButtonClick).toHaveBeenCalledTimes(1)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should svg has correct color', () => {
    const colorHex = '#000'
    const onButtonClick = jest.fn()

    const wrapper = shallow(
      <CloseButton handleClick={onButtonClick} colorHex={colorHex} />
    )

    expect(wrapper.find('path').prop('stroke')).toMatch(colorHex)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has className from prop', () => {
    const className = 'mb-2'
    const onButtonClick = jest.fn()

    const wrapper = shallow(
      <CloseButton handleClick={onButtonClick} className={className} />
    )

    expect(wrapper.prop('className')).toContain(className)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

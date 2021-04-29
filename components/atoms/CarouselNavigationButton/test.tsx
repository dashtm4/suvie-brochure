import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { CarouselNavigationButton } from '.'

describe('<CarouselNavigationButton />', () => {
  it('should renders correct <CarouselNavigationButton />', () => {
    const onButtonClick = jest.fn()

    const wrapper = shallow(
      <CarouselNavigationButton onButtonClick={onButtonClick} />
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should simulates click events', () => {
    const onButtonClick = jest.fn()

    const wrapper = shallow(
      <CarouselNavigationButton onButtonClick={onButtonClick} />
    )

    wrapper.simulate('click')

    expect(onButtonClick).toHaveBeenCalledTimes(1)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should renders correct <CarouselNavigationButton /> with correct className prop', () => {
    const onButtonClick = jest.fn()
    const className = 'mb-2'

    const wrapper = shallow(
      <CarouselNavigationButton
        onButtonClick={onButtonClick}
        className={className}
      />
    )

    expect(wrapper.prop('className')).toContain(className)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

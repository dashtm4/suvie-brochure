import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { CarouselPagination } from '.'

describe('<CarouselPagination />', () => {
  it('should renders correct <CarouselPagination />', () => {
    const slideCount = 3
    const currentSlide = 0
    const goToSlide = jest.fn()

    const wrapper = shallow(
      <CarouselPagination
        slideCount={slideCount}
        currentSlide={currentSlide}
        goToSlide={goToSlide}
      />
    )

    expect(wrapper.find('button')).toHaveLength(3)
    expect(wrapper.find('button').get(0).props.className).not.toContain(
      'opacity-25'
    )
    expect(wrapper.find('button').get(1).props.className).toContain(
      'opacity-25'
    )
    expect(wrapper.find('button').get(2).props.className).toContain(
      'opacity-25'
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should simulates click events', () => {
    const slideCount = 3
    const currentSlide = 0
    const goToSlide = jest.fn()

    const wrapper = shallow(
      <CarouselPagination
        slideCount={slideCount}
        currentSlide={currentSlide}
        goToSlide={goToSlide}
      />
    )

    wrapper.find('button').at(0)?.simulate('click')
    wrapper.find('button').at(1)?.simulate('click')
    wrapper.find('button').at(2)?.simulate('click')

    expect(goToSlide).toHaveBeenCalledTimes(3)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should renders correct <CarouselPagination /> with light theme', () => {
    const slideCount = 3
    const currentSlide = 0
    const goToSlide = jest.fn()
    const theme = 'light'

    const wrapper = shallow(
      <CarouselPagination
        slideCount={slideCount}
        currentSlide={currentSlide}
        goToSlide={goToSlide}
        theme={theme}
      />
    )

    expect(wrapper.find('button').at(0).prop('className')).toContain(
      'bg-secondary'
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should renders correct <CarouselPagination /> with dark theme', () => {
    const slideCount = 3
    const currentSlide = 0
    const goToSlide = jest.fn()
    const theme = 'dark'

    const wrapper = shallow(
      <CarouselPagination
        slideCount={slideCount}
        currentSlide={currentSlide}
        goToSlide={goToSlide}
        theme={theme}
      />
    )

    expect(wrapper.find('button').at(0).prop('className')).toContain('bg-white')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should renders correct <CarouselPagination /> with correct className prop', () => {
    const slideCount = 3
    const currentSlide = 0
    const goToSlide = jest.fn()
    const className = 'mb-2'

    const wrapper = shallow(
      <CarouselPagination
        slideCount={slideCount}
        currentSlide={currentSlide}
        goToSlide={goToSlide}
        className={className}
      />
    )

    expect(wrapper.prop('className')).toContain(className)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

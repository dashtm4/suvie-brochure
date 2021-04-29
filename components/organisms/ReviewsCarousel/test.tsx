import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ReviewsCarousel } from '.'

describe('<ReviewsCarousel />', () => {
  const reviews = [
    {
      id: '1',
      name: 'John Doe',
      body: 'Test review',
      image: {
        url: '/image.jpg'
      }
    },
    {
      id: '2',
      name: 'Jain Doe',
      body: 'Test review 2',
      image: {
        url: '/image.jpg'
      }
    }
  ]

  it('should renders correct <ReviewsCarousel />', () => {
    const wrapper = shallow(<ReviewsCarousel reviews={reviews} />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should renders correct <ReviewsCarousel /> with correct ClassName prop', () => {
    const className = 'mb-2'

    const wrapper = shallow(
      <ReviewsCarousel reviews={reviews} className={className} />
    )

    expect(wrapper.prop('className')).toMatch(className)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

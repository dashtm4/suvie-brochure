import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ReviewCard } from '.'

describe('<ReviewCard />', () => {
  const review = {
    name: 'John Doe',
    body: 'Test review',
    image: {
      url: '/image.jpg'
    }
  }

  it('should renders correct <ReviewCard /> with required props', () => {
    const wrapper = shallow(<ReviewCard review={review} />)

    expect(wrapper.contains(review.name))
    expect(wrapper.contains(review.body))

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should renders correct <ReviewCard /> with required props and className', () => {
    const className = 'md-2'

    const wrapper = shallow(
      <ReviewCard review={review} className={className} />
    )

    expect(wrapper.prop('className')).toContain(className)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

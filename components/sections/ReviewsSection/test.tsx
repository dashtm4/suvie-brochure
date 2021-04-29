import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ReviewsSection } from '.'

describe('<ReviewsSection />', () => {
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

  it('should renders correct <ReviewsSection />', () => {
    const wrapper = shallow(<ReviewsSection reviews={reviews} />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

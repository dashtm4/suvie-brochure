import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ReviewsReviewsSection } from '.'

describe('<ReviewsReviewsSection />', () => {
  it('should renders correct <ReviewsReviewsSection />', () => {
    const wrapper = shallow(<ReviewsReviewsSection />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

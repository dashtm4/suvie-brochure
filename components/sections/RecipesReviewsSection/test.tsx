import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { RecipesReviewsSection } from '.'

describe('<RecipesReviewsSection />', () => {
  it('should renders correct <RecipesReviewsSection />', () => {
    const wrapper = shallow(<RecipesReviewsSection />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

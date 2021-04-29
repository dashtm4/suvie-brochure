import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ReviewsTemplate } from '.'

describe('<ReviewsTemplate />', () => {
  it('should renders correct <ReviewsTemplate />', () => {
    const wrapper = shallow(<ReviewsTemplate />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

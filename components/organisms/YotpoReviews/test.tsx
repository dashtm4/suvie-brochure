import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { YotpoReviews } from '.'

describe('<YotpoReviews />', () => {
  it('should renders correct <YotpoReviews />', () => {
    const wrapper = shallow(<YotpoReviews />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

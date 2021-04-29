import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { HomeExplorePlansAndHealthSection } from '.'

describe('<HomeExplorePlansAndHealthSection />', () => {
  it('should renders correct <HomeExplorePlansAndHealthSection />', () => {
    const wrapper = shallow(<HomeExplorePlansAndHealthSection />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

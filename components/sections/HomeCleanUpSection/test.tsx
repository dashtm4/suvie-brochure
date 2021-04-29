import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { HomeCleanUpSection } from '.'

describe('<HomeCleanUpSection />', () => {
  it('should renders correct <HomeCleanUpSection />', () => {
    const wrapper = shallow(<HomeCleanUpSection />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

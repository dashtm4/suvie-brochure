import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { HomeHeroSection } from '.'

describe('<HomeHeroSection />', () => {
  it('should renders correct <HomeHeroSection />', () => {
    const wrapper = shallow(<HomeHeroSection />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

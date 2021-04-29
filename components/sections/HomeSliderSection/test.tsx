import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { HomeSliderSection } from '.'

describe('<HomeSliderSection />', () => {
  it('should renders correct <HomeSliderSection />', () => {
    const wrapper = shallow(<HomeSliderSection />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { AboutUsSection } from '.'

describe('<AboutUsSection />', () => {
  it('should renders correct <AboutUsSection />', () => {
    const wrapper = shallow(<AboutUsSection />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

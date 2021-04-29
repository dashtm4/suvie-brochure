import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { HomeSealsSection } from '.'

describe('<HomeSealsSection />', () => {
  it('should renders correct <HomeSealsSection />', () => {
    const wrapper = shallow(<HomeSealsSection />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

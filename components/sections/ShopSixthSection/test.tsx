import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ShopSixthSection } from '.'

describe('<ShopSixthSection />', () => {
  it('should renders correct <ShopSixthSection />', () => {
    const wrapper = shallow(<ShopSixthSection />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

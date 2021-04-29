import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ShopSecondSection } from '.'

describe('<ShopSecondSection />', () => {
  it('should renders correct <ShopSecondSection />', () => {
    const wrapper = shallow(<ShopSecondSection />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

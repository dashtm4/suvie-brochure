import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ShopThirdSection } from '.'

describe('<ShopThirdSection />', () => {
  it('should renders correct <ShopThirdSection />', () => {
    const wrapper = shallow(<ShopThirdSection />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

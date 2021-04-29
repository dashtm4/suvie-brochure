import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ShopTemplate } from '@components/templates'

describe('<ShopTemplate />', () => {
  it('should renders correct <ShopTemplate />', () => {
    const wrapper = shallow(<ShopTemplate />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

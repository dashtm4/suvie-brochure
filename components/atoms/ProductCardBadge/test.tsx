import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ProductCardBadge } from '.'

describe('<ProductCardBadge />', () => {
  const children = 'Test children'

  it('should renders correct <ProductCardBadge />', () => {
    const wrapper = shallow(<ProductCardBadge>{children}</ProductCardBadge>)

    expect(wrapper.contains(children)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

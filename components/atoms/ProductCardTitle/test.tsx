import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ProductCardTitle } from '.'

describe('<ProductCardTitle />', () => {
  const children = 'Test children'

  it('should renders correct <ProductCardTitle />', () => {
    const wrapper = shallow(<ProductCardTitle>{children}</ProductCardTitle>)

    expect(wrapper.contains(children)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

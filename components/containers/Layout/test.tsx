import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Layout } from '.'

describe('<Layout />', () => {
  it('should renders correct <Layout />', () => {
    const wrapper = shallow(<Layout />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

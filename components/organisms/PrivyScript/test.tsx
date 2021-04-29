import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { PrivyScript } from '.'

describe('<PrivyScript />', () => {
  it('should renders correct <PrivyScript />', () => {
    const wrapper = shallow(<PrivyScript />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

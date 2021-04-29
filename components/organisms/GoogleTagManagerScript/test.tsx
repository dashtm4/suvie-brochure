import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { GoogleTagManagerScript } from '.'

describe('<GoogleTagManagerScript />', () => {
  it('should renders correct <GoogleTagManagerScript />', () => {
    const wrapper = shallow(<GoogleTagManagerScript />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

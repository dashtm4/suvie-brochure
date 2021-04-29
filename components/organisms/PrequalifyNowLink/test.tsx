import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { PrequalifyNowLink } from '.'

describe('<PrequalifyNowLink />', () => {
  it('should renders correct <PrequalifyNowLink />', () => {
    const wrapper = shallow(<PrequalifyNowLink />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ShadowBackdrop } from '.'

describe('<ShadowBackdrop />', () => {
  it('should renders correct <ShadowBackdrop />', () => {
    const children = 'test'

    const wrapper = shallow(<ShadowBackdrop>{children}</ShadowBackdrop>)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

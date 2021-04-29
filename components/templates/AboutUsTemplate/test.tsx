import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { AboutUsTemplate } from '.'

describe('<AboutUsTemplate />', () => {
  it('should renders correct <AboutUsTemplate />', () => {
    const wrapper = shallow(<AboutUsTemplate />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Star } from '.'

describe('<Star />', () => {
  it('should renders correct <Star />', () => {
    const wrapper = shallow(<Star />)

    expect(wrapper.prop('className')).toMatch('fill-primary')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should renders correct <Star /> with correct className prop', () => {
    const wrapper = shallow(<Star className="fill-white" />)

    expect(wrapper.prop('className')).toMatch('fill-white')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ResponsiveSegment } from '.'

describe('<ResponsiveSegment />', () => {
  it('should renders correct <ResponsiveSegment />', () => {
    const wrapper = shallow(<ResponsiveSegment />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

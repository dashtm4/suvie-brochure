import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Typography } from '.'

describe('<Typography />', () => {
  it('should renders correct <Typography />', () => {
    const wrapper = shallow(<Typography />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

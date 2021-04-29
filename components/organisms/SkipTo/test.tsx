import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { SkipTo } from '.'

describe('<SkipTo />', () => {
  it('should renders correct <SkipTo />', () => {
    const wrapper = shallow(<SkipTo />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

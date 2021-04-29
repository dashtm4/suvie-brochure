import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { PressList } from '.'

describe('<PressList />', () => {
  it('should renders correct <PressList />', () => {
    const wrapper = shallow(<PressList />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

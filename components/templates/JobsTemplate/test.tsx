import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { JobsTemplate } from '.'

describe('<JobsTemplate />', () => {
  it('should renders correct <JobsTemplate />', () => {
    const wrapper = shallow(<JobsTemplate />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

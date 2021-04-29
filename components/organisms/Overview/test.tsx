import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Overview } from '.'

describe('<Overview />', () => {
  it('should renders correct <Overview />', () => {
    const content = {
      title: {},
      subtitle: ['TestSubtitle']
    }

    const wrapper = shallow(<Overview content={content} />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

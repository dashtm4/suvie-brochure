import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Introduction } from '.'

describe('<Introduction />', () => {
  it('should renders correct <Introduction />', () => {
    const content = {
      height: '100',
      title: 'TestTitle',
      content: null
    }
    const wrapper = shallow(<Introduction content={content} />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

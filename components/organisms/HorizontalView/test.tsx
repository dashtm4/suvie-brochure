import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { HorizontalView } from '.'

describe('<HorizontalView />', () => {
  it('should renders correct <HorizontalView />', () => {
    const content = {
      title: 'TestTitle',
      content: 'TestContent'
    }

    const wrapper = shallow(<HorizontalView content={content} />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

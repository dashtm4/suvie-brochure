import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { VerticalView } from '.'

describe('<VerticalView />', () => {
  it('should renders correct <VerticalView />', () => {
    const content = {
      title: 'TestTitle',
      content: 'TestContent'
    }

    const wrapper = shallow(<VerticalView content={content} />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

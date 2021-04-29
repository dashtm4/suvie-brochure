import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Paragraphs } from '.'

describe('<Paragraphs />', () => {
  const children = 'Test children 1 \n Test children 2'

  it('should renders correct <Paragraphs />', () => {
    const wrapper = shallow(<Paragraphs>{children}</Paragraphs>)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

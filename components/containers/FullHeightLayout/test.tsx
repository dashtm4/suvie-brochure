import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { FullHeightLayout } from '.'

describe('<FullHeightLayout />', () => {
  it('should renders children', () => {
    const text = 'test'

    const wrapper = shallow(<FullHeightLayout>{text}</FullHeightLayout>)

    expect(wrapper.text()).toMatch(text)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should render correct html', () => {
    const text = 'test'

    const wrapper = shallow(<FullHeightLayout>{text}</FullHeightLayout>)

    expect(wrapper.html()).toMatch(
      `<div class="min-h-screen flex flex-col">${text}</div>`
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

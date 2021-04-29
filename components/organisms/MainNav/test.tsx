import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { MainNav } from '.'

describe('<MainNav />', () => {
  const setIsShown = jest.fn()

  it('should renders correct hidden <MainNav />', () => {
    const isShown = false

    const wrapper = shallow(
      <MainNav isShown={isShown} setIsShown={setIsShown} />
    )

    expect(wrapper.find('nav.hidden')).toHaveLength(1)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should renders correct shown <MainNav />', () => {
    const isShown = true

    const wrapper = shallow(
      <MainNav isShown={isShown} setIsShown={setIsShown} />
    )

    expect(wrapper.find('nav.hidden')).toHaveLength(0)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

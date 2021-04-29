import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { StartingAtWithAffirm } from '.'

describe('<StartingAtWithAffirm />', () => {
  it('should renders correct <StartingAtWithAffirm />', () => {
    const wrapper = shallow(<StartingAtWithAffirm />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct className from className prop', () => {
    const className = 'test-class-name'

    const wrapper = shallow(<StartingAtWithAffirm className={className} />)

    expect(wrapper.prop('className')).toContain(className)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

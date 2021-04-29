import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { FormError } from '.'

describe('<FormError />', () => {
  it('should has correct props', () => {
    const name = 'test'

    const wrapper = shallow(<FormError name={name} />)

    expect(wrapper.props()).toEqual({
      name: name,
      component: 'div',
      className: 'form__error-message'
    })

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

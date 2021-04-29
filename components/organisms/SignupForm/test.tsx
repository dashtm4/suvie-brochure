import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { SignupForm } from '.'

describe('<SignupForm />', () => {
  it('should renders correct <SignupForm />', () => {
    const wrapper = shallow(<SignupForm />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

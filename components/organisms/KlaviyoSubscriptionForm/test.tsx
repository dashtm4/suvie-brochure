import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { KlaviyoSubscriptionForm } from '.'

describe('<KlaviyoSubscriptionForm />', () => {
  it('should renders correct <KlaviyoSubscriptionForm />', () => {
    const wrapper = shallow(<KlaviyoSubscriptionForm />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

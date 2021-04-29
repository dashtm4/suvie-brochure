import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { AffirmScript } from '.'

describe('<AffirmScript />', () => {
  it('should renders correct <AffirmScript />', () => {
    const wrapper = shallow(<AffirmScript />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { HomeSaveUpTimeSection } from '.'

describe('<HomeSaveUpTimeSection />', () => {
  it('should renders correct <HomeSaveUpTimeSection />', () => {
    const wrapper = shallow(<HomeSaveUpTimeSection />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

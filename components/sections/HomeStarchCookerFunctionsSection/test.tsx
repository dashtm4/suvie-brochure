import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { HomeStarchCookerFunctionsSection } from '.'

describe('<HomeStarchCookerFunctionsSection />', () => {
  it('should renders correct <HomeStarchCookerFunctionsSection />', () => {
    const wrapper = shallow(<HomeStarchCookerFunctionsSection />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

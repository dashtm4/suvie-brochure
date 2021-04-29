import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { RecipesTemplate } from '.'

describe('<RecipesTemplate />', () => {
  it('should renders correct <RecipesTemplate />', () => {
    const wrapper = shallow(<RecipesTemplate />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

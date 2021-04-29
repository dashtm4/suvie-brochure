import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { MealsList } from '.'

describe('<Recipes />', () => {
  it('should renders correct <Recipes />', () => {
    const wrapper = shallow(<MealsList meals={[]} />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

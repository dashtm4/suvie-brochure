import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { RecipesYourChoiceSection } from '.'

describe('<RecipesYourChoiceSection />', () => {
  it('should renders correct <RecipesYourChoiceSection />', () => {
    const wrapper = shallow(<RecipesYourChoiceSection />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

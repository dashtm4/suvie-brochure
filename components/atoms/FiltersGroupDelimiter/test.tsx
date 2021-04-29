import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { FiltersGroupDelimiter } from '.'

describe('<FiltersGroupDelimiter />', () => {
  it('should renders correct <FiltersGroupDelimiter />', () => {
    const wrapper = shallow(<FiltersGroupDelimiter />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

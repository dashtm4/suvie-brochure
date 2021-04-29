import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ReviewsTotal } from '.'

describe('<ReviewsTotal />', () => {
  it('should renders correct <ReviewsTotal />', () => {
    const description = 'Test description'

    const wrapper = shallow(<ReviewsTotal description={description} />)

    expect(wrapper.find('Star')).toHaveLength(5)
    expect(wrapper.contains(description)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should renders correct <ReviewsTotal /> with starNumbers prop', () => {
    const description = 'Test description'
    const starsNumber = 10

    const wrapper = shallow(
      <ReviewsTotal starsNumber={starsNumber} description={description} />
    )

    expect(wrapper.find('Star')).toHaveLength(starsNumber)
    expect(wrapper.contains(description)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

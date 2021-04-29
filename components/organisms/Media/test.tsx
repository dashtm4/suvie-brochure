import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Media } from '.'

describe('<Media />', () => {
  const imageSrc = 'image.jpg'

  it('should renders correct <Media />', () => {
    const wrapper = shallow(<Media imageSrc={imageSrc} />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

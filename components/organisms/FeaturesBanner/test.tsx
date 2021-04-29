import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { FeaturesBanner } from '.'

describe('<FeaturesBanner />', () => {
  const features = [
    {
      title: 'Test title',
      imageSrc: 'image.jpg',
      width: 40,
      height: 40
    },
    {
      title: 'Test title 2',
      imageSrc: 'image-2.jpg',
      width: 40,
      height: 40
    }
  ]

  it('should renders correct <FeaturesBanner />', () => {
    const wrapper = shallow(<FeaturesBanner features={features} />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { FeaturesBannerListItem } from '.'

describe('<FeaturesBannerListItem />', () => {
  it('should renders correct <FeaturesBannerListItem />', () => {
    const feature = {
      title: 'Test title',
      image: {
        url: 'image.jpg',
        width: 40,
        height: 40
      }
    }

    const wrapper = shallow(<FeaturesBannerListItem feature={feature} />)

    expect(wrapper.contains(feature.title)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

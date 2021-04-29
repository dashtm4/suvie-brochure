import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Video } from '.'

describe('<Video />', () => {
  const src = {
    videoSrc: 'video.mp4',
    imageSrc: 'image.jpg'
  }

  it('should renders correct <Video />', () => {
    const wrapper = shallow(<Video src={src} />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

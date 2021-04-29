import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { VideoCard } from '.'

describe('<VideoCard />', () => {
  const posterSrc = 'image.jpg'
  const videoSrc = 'video.mp4'

  it('should renders correct <VideoCard />', () => {
    const wrapper = shallow(
      <VideoCard posterSrc={posterSrc} videoSrc={videoSrc} />
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

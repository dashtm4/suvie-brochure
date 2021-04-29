import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { VideoPlayer } from '.'

describe('<VideoPlayer />', () => {
  it('should renders correct <VideoPlayer />', () => {
    const url = 'video.mp4'

    const wrapper = shallow(<VideoPlayer url={url} />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

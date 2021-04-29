import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { MediaCard } from '.'

describe('<MediaCard />', () => {
  it('should renders correct <MediaCard />', () => {
    const title = 'Test title'
    const description = 'Test description'
    const imageSrc = 'image.jpg'

    const wrapper = shallow(
      <MediaCard title={title} description={description} imageSrc={imageSrc} />
    )

    expect(wrapper.contains(title)).toBeTruthy()
    expect(wrapper.contains(description)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should renders correct <MediaCard /> with correct videoSrc prop', () => {
    const title = 'Test title'
    const description = 'Test description'
    const imageSrc = 'image.jpg'
    const videoSrc = 'video.avi'

    const wrapper = shallow(
      <MediaCard
        title={title}
        description={description}
        imageSrc={imageSrc}
        videoSrc={videoSrc}
      />
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should renders correct <MediaCard /> with correct tags prop', () => {
    const title = 'Test title'
    const description = 'Test description'
    const imageSrc = 'image.jpg'
    const tag1 = 'Test tag 1'
    const tag2 = 'Test tag 2'
    const tags = [tag1, tag2]

    const wrapper = shallow(
      <MediaCard
        title={title}
        description={description}
        imageSrc={imageSrc}
        tags={tags}
      />
    )

    expect(wrapper.contains(tag1)).toBeTruthy()
    expect(wrapper.contains(tag2)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { VideoModal } from '.'

describe('<VideoModal />', () => {
  const children = 'test'
  const toggleModal = jest.fn()

  it('should renders correct <VideoModal />', () => {
    const wrapper = shallow(
      <VideoModal toggleModal={toggleModal}>{children}</VideoModal>
    )

    expect(wrapper.contains(children)).toBeTruthy()
    expect(wrapper.find('.aspect-w-16.aspect-h-9')).toHaveLength(0)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct video attributes from props', () => {
    const videoSrc = 'video.mp4'
    const posterSrc = 'image.jpg'
    const videoAutoPlay = false
    const videoControls = true
    const videoLoop = false
    const videoMuted = false

    const wrapper = shallow(
      <VideoModal
        toggleModal={toggleModal}
        videoSrc={videoSrc}
        posterSrc={posterSrc}
        videoAutoPlay={videoAutoPlay}
        videoControls={videoControls}
        videoLoop={videoLoop}
        videoMuted={videoMuted}
      >
        {children}
      </VideoModal>
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should not has wide screen aspect ratio when isWidescreenAspectRatio prop is false', () => {
    const isWidescreenAspectRatio = false

    const wrapper = shallow(
      <VideoModal
        toggleModal={toggleModal}
        isWidescreenAspectRatio={isWidescreenAspectRatio}
      >
        {children}
      </VideoModal>
    )

    expect(wrapper.find('.aspect-w-16.aspect-h-9')).toHaveLength(0)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has wide screen aspect ratio when isWidescreenAspectRatio prop is true', () => {
    const isWidescreenAspectRatio = true

    const wrapper = shallow(
      <VideoModal
        toggleModal={toggleModal}
        isWidescreenAspectRatio={isWidescreenAspectRatio}
      >
        {children}
      </VideoModal>
    )

    expect(wrapper.find('.aspect-w-16.aspect-h-9')).toHaveLength(1)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

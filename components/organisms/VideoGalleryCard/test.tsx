import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { VideoGalleryCard } from '.'

describe('<VideoGalleryCard />', () => {
  const activeVideoIndex = 0
  const videos = ['video-1.mp4', 'video-2.mp4', 'video-3.mp4']

  it('should renders correct <VideoGalleryCard />', () => {
    const setActiveVideoIndex = jest.fn()

    const wrapper = shallow(
      <VideoGalleryCard
        videos={videos}
        activeVideoIndex={activeVideoIndex}
        setActiveVideoIndex={setActiveVideoIndex}
      />
    )

    expect(wrapper.find('VideoCard').prop('videoSrc')).toMatch(videos[0])
    expect(wrapper.find('VideoGalleryCardPagination').prop('length')).toEqual(
      videos.length
    )
    expect(
      wrapper.find('VideoGalleryCardPagination').prop('activeIndex')
    ).toEqual(0)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct activeIndex from activeVideoIndex prop', () => {
    const setActiveVideoIndex = jest.fn()
    const activeVideoIndex = 1

    const wrapper = shallow(
      <VideoGalleryCard
        videos={videos}
        activeVideoIndex={activeVideoIndex}
        setActiveVideoIndex={setActiveVideoIndex}
      />
    )

    expect(wrapper.find('VideoCard').prop('videoSrc')).toMatch(videos[1])
    expect(
      wrapper.find('VideoGalleryCardPagination').prop('activeIndex')
    ).toEqual(1)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct titles from titles prop', () => {
    const setActiveVideoIndex = jest.fn()
    const titles = ['Test title 1', 'Test title 2']

    const wrapper = shallow(
      <VideoGalleryCard
        videos={videos}
        titles={titles}
        activeVideoIndex={activeVideoIndex}
        setActiveVideoIndex={setActiveVideoIndex}
      />
    )

    expect(wrapper.contains(titles[0])).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct descriptions from descriptions prop', () => {
    const setActiveVideoIndex = jest.fn()
    const descriptions = ['Test description 1', 'Test description 2']

    const wrapper = shallow(
      <VideoGalleryCard
        videos={videos}
        descriptions={descriptions}
        activeVideoIndex={activeVideoIndex}
        setActiveVideoIndex={setActiveVideoIndex}
      />
    )

    expect(wrapper.contains(descriptions[0])).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should not render pagination when showPagination prop is false', () => {
    const setActiveVideoIndex = jest.fn()
    const showPagination = false

    const wrapper = shallow(
      <VideoGalleryCard
        videos={videos}
        showPagination={showPagination}
        activeVideoIndex={activeVideoIndex}
        setActiveVideoIndex={setActiveVideoIndex}
      />
    )

    expect(wrapper.find('VideoGalleryCardPagination')).toHaveLength(0)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

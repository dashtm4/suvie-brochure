import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { VideoGalleryCardPagination } from '.'

describe('<VideoGalleryCardPagination />', () => {
  const length = 2
  const activeIndex = 1
  const changeVideo = jest.fn()

  it('should renders correct <VideoGalleryCardPagination />', () => {
    const wrapper = shallow(
      <VideoGalleryCardPagination
        length={length}
        activeIndex={activeIndex}
        changeVideo={changeVideo}
      />
    )

    expect(wrapper.find('VideoGalleryCardPaginationItem')).toHaveLength(2)
    expect(
      wrapper.find('VideoGalleryCardPaginationItem').at(0).prop('isActive')
    ).toEqual(false)
    expect(
      wrapper.find('VideoGalleryCardPaginationItem').at(1).prop('isActive')
    ).toEqual(true)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should renders correct <VideoGalleryCardPagination />', () => {
    const className = 'test-class-name'

    const wrapper = shallow(
      <VideoGalleryCardPagination
        length={length}
        activeIndex={activeIndex}
        changeVideo={changeVideo}
        className={className}
      />
    )

    expect(wrapper.prop('className')).toMatch(className)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { VideoGalleryCardPaginationItem } from '.'

describe('<VideoGalleryCardPaginationItem />', () => {
  const index = 0
  const isActive = false
  const changeVideo = jest.fn()

  it('should renders correct <VideoGalleryCardPaginationItem />', () => {
    const wrapper = shallow(
      <VideoGalleryCardPaginationItem
        index={index}
        isActive={isActive}
        changeVideo={changeVideo}
      />
    )

    expect(wrapper.contains(index + 1)).toBeTruthy()
    expect(wrapper.prop('className')).toContain('opacity-50')

    wrapper.simulate('click')

    expect(changeVideo).toHaveBeenCalledTimes(1)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct className when isActive prop is true', () => {
    const isActive = true

    const wrapper = shallow(
      <VideoGalleryCardPaginationItem
        index={index}
        isActive={isActive}
        changeVideo={changeVideo}
      />
    )

    expect(wrapper.prop('className')).not.toContain('opacity-50')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

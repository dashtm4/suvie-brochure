import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { VideoTabs } from '.'

describe('<VideoTabs />', () => {
  const tabData = {}
  const activeIndex = 0

  it('should renders correct <VideoTabs />', () => {
    const setActiveIndex = jest.fn()

    const wrapper = shallow(
      <VideoTabs
        tabData={tabData}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

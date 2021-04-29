import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { LearnMoreModal } from '.'

describe('<LearnMoreModal />', () => {
  const title = 'Test title'
  const description = 'Test description'
  const videoSrc = 'video.jpg'
  const posterSrc = 'image.jpg'
  const toggleModal = jest.fn()

  it('should renders correct <LearnMoreModal />', () => {
    const wrapper = shallow(
      <LearnMoreModal
        title={title}
        description={description}
        videoSrc={videoSrc}
        posterSrc={posterSrc}
        toggleModal={toggleModal}
      />
    )

    expect(wrapper.contains(title)).toBeTruthy()
    expect(wrapper.contains(description)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

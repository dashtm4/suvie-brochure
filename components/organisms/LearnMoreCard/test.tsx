import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { LearnMoreCard } from '.'

describe('<LearnMoreCard />', () => {
  const title = 'Test title'
  const shortDescription = 'Test short description'
  const posterSrc = 'image.jpg'
  const videoSrc = 'video.jpg'

  it('should renders correct <LearnMoreCard />', () => {
    const wrapper = shallow(
      <LearnMoreCard
        title={title}
        shortDescription={shortDescription}
        posterSrc={posterSrc}
        videoSrc={videoSrc}
      />
    )

    expect(wrapper.contains(title)).toBeTruthy()
    expect(wrapper.contains(shortDescription)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has tags from prop', () => {
    const tags = ['Test tag 1', 'Test tag 2']

    const wrapper = shallow(
      <LearnMoreCard
        title={title}
        shortDescription={shortDescription}
        posterSrc={posterSrc}
        videoSrc={videoSrc}
        tags={tags}
      />
    )

    expect(wrapper.contains(tags[0])).toBeTruthy()
    expect(wrapper.contains(tags[0])).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { FeaturesModal } from '.'

describe('<FeaturesModal />', () => {
  it('should renders correct <FeaturesModal />', () => {
    const title = 'Test title'
    const subtitle = 'Test subtitle'
    const toggleModal = jest.fn()
    const features = [
      {
        title: 'Test feature title',
        description: 'Test feature description'
      }
    ]

    const wrapper = shallow(
      <FeaturesModal
        title={title}
        subtitle={subtitle}
        toggleModal={toggleModal}
        features={features}
      />
    )

    expect(wrapper.contains(title)).toBeTruthy()
    expect(wrapper.contains(subtitle)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { SimpleHero } from '.'

describe('<SimpleHero />', () => {
  const children = 'Test children'
  const imageSrc = 'image.jpg'
  const mobileHeight = 500
  const desktopHeight = 700

  it('should renders correct <SimpleHero />', () => {
    const wrapper = shallow(
      <SimpleHero
        mobileHeight={mobileHeight}
        desktopHeight={desktopHeight}
        imageSrc={imageSrc}
      >
        {children}
      </SimpleHero>
    )

    expect(wrapper.contains(children)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

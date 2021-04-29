import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Feature } from '.'

describe('<Feature />', () => {
  it('should renders correct <Feature />', () => {
    const title = 'Test title'
    const description = 'Test description'
    const imageSrc = 'image.jpg'

    const wrapper = shallow(
      <Feature title={title} description={description} imageSrc={imageSrc} />
    )

    expect(wrapper.contains(title)).toBeTruthy()
    expect(wrapper.contains(description)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should renders correct <Feature /> with light theme', () => {
    const title = 'Test title'
    const description = 'Test description'
    const imageSrc = 'image.jpg'
    const theme = 'light'

    const wrapper = shallow(
      <Feature
        title={title}
        description={description}
        imageSrc={imageSrc}
        theme={theme}
      />
    )

    expect(wrapper.find('h3').prop('className')).toContain('text-secondary')
    expect(wrapper.find('div.text-septenary')).toHaveLength(1)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should renders correct <Feature /> with dark theme', () => {
    const title = 'Test title'
    const description = 'Test description'
    const imageSrc = 'image.jpg'
    const theme = 'dark'

    const wrapper = shallow(
      <Feature
        title={title}
        description={description}
        imageSrc={imageSrc}
        theme={theme}
      />
    )

    expect(wrapper.find('h3').prop('className')).toContain('text-white')
    expect(wrapper.find('div.text-white')).toHaveLength(1)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has className from className prop', () => {
    const title = 'Test title'
    const description = 'Test description'
    const imageSrc = 'image.jpg'
    const className = 'test-classname'

    const wrapper = shallow(
      <Feature
        title={title}
        description={description}
        imageSrc={imageSrc}
        className={className}
      />
    )

    expect(wrapper.prop('className')).toContain(className)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

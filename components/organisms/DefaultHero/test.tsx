import { shallow, mount } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { DefaultHero } from '.'

describe('<DefaultHero />', () => {
  const title = 'Test title'

  it('should renders correct <DefaultHero /> with correct title', () => {
    const wrapper = shallow(<DefaultHero title={title} />)

    expect(wrapper.find('PageTitle').contains(title))

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should renders correct <DefaultHero /> with correct subtitle', () => {
    const subtitle = 'Test subtitle'

    const wrapper = shallow(<DefaultHero title={title} subtitle={subtitle} />)

    expect(wrapper.contains(subtitle)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should renders correct <DefaultHero /> with correct title and strapline', () => {
    const strapline = 'Test strapline'

    const wrapper = shallow(<DefaultHero title={title} strapline={strapline} />)

    expect(wrapper.contains(strapline)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should renders correct <DefaultHero /> with background image', (done) => {
    const windowWidth = 769

    const imageSrc = 'image.jpg'
    const mobileImageSrc = 'image--small.jpg'

    const wrapper = mount(
      <DefaultHero
        title={title}
        imageSrc={imageSrc}
        mobileImageSrc={mobileImageSrc}
      />
    )

    const callback = () => {
      expect(wrapper.find('section').prop('style')).toEqual({
        backgroundImage: `url(${imageSrc})`
      })

      window.removeEventListener('resize', callback)

      expect(toJSON(wrapper)).toMatchSnapshot()

      done()
    }

    window.addEventListener('resize', callback)

    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: windowWidth
    })

    window.dispatchEvent(new Event('resize'))
  })

  it('should renders correct <DefaultHero /> with mobile background image from imageSrc prop', (done) => {
    const windowWidth = 380

    const imageSrc = 'image.jpg'

    const wrapper = mount(<DefaultHero title={title} imageSrc={imageSrc} />)

    const callback = () => {
      expect(wrapper.find('section').prop('style')).toEqual({
        backgroundImage: `url(${imageSrc})`
      })

      window.removeEventListener('resize', callback)

      expect(toJSON(wrapper)).toMatchSnapshot()

      done()
    }

    window.addEventListener('resize', callback)

    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: windowWidth
    })

    window.dispatchEvent(new Event('resize'))
  })

  it('should renders correct <DefaultHero /> with correct className when bgPosition is default', () => {
    const wrapper = shallow(<DefaultHero title={title} />)

    expect(wrapper.prop('className')).toContain('bg-center')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should renders correct <DefaultHero /> with correct className when bgPosition is top', () => {
    const bgPosition = 'top'

    const wrapper = shallow(
      <DefaultHero title={title} bgPosition={bgPosition} />
    )

    expect(wrapper.prop('className')).toContain('bg-top')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should renders correct <DefaultHero /> with correct className when bgPosition is center', () => {
    const bgPosition = 'center'

    const wrapper = shallow(
      <DefaultHero title={title} bgPosition={bgPosition} />
    )

    expect(wrapper.prop('className')).toContain('bg-center')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should renders correct <DefaultHero /> with correct className when bgPosition is bottom', () => {
    const bgPosition = 'bottom'

    const wrapper = shallow(
      <DefaultHero title={title} bgPosition={bgPosition} />
    )

    expect(wrapper.prop('className')).toContain('bg-bottom')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

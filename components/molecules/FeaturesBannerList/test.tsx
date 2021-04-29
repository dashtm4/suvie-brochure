import { mount } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { FeaturesBannerList } from '.'

describe('<FeaturesBannerList />', () => {
  const features = [
    {
      title: 'Test title',
      image: {
        url: 'image.jpg',
        width: 40,
        height: 40
      }
    },
    {
      title: 'Test title 2',
      image: {
        url: 'image-2.jpg',
        width: 40,
        height: 40
      }
    }
  ]

  it('should renders correct <FeaturesBannerList /> without Carousel when window size is more or equal 768', (done) => {
    const windowWidth = 768

    const callback = () => {
      if (window.innerWidth === windowWidth) {
        const wrapper = mount(<FeaturesBannerList features={features} />)

        expect(wrapper.find('Carousel')).toHaveLength(0)

        expect(toJSON(wrapper)).toMatchSnapshot()

        window.removeEventListener('resize', callback)

        done()
      }
    }

    window.addEventListener('resize', callback)

    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: windowWidth
    })

    window.dispatchEvent(new Event('resize'))
  })

  it('should renders correct <FeaturesBannerList /> with Carousel when window size is less then 768', (done) => {
    const windowWidth = 767

    const callback = () => {
      if (window.innerWidth === windowWidth) {
        const wrapper = mount(<FeaturesBannerList features={features} />)

        expect(wrapper.find('Carousel')).toHaveLength(1)

        expect(toJSON(wrapper)).toMatchSnapshot()

        window.removeEventListener('resize', callback)

        done()
      }
    }

    window.addEventListener('resize', callback)

    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: windowWidth
    })

    window.dispatchEvent(new Event('resize'))
  })
})

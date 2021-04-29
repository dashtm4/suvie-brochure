import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { InfoLink } from '.'

describe('<InfoLink />', () => {
  const href = '/test/'

  it('should renders correct <InfoLink />', () => {
    const wrapper = shallow(<InfoLink href={href} />)

    expect(wrapper.find('Link').prop('href')).toMatch(href)
    expect(wrapper.find('InfoIcon').prop('width')).toEqual(10)
    expect(wrapper.find('InfoIcon').prop('height')).toEqual(10)
    expect(wrapper.find('InfoIcon').prop('colorHex')).toMatch('#000')
    expect(wrapper.find('InfoIcon').prop('className')).toMatch('')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should InfoIcon has correct width from prop', () => {
    const width = 15

    const wrapper = shallow(<InfoLink href={href} width={width} />)

    expect(wrapper.find('InfoIcon').prop('width')).toEqual(width)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should InfoIcon has correct height from prop', () => {
    const height = 15

    const wrapper = shallow(<InfoLink href={href} height={height} />)

    expect(wrapper.find('InfoIcon').prop('height')).toEqual(height)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should InfoIcon has correct colorHex from prop', () => {
    const colorHex = '#fff'

    const wrapper = shallow(<InfoLink href={href} colorHex={colorHex} />)

    expect(wrapper.find('InfoIcon').prop('colorHex')).toEqual(colorHex)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should InfoIcon has correct className from prop', () => {
    const className = 'test-classname'

    const wrapper = shallow(<InfoLink href={href} className={className} />)

    expect(wrapper.find('InfoIcon').prop('className')).toEqual(className)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { InfoIcon } from '.'

describe('<InfoIcon />', () => {
  it('should renders correct <InfoIcon />', () => {
    const wrapper = shallow(<InfoIcon />)

    expect(wrapper.prop('width')).toEqual(10)
    expect(wrapper.prop('height')).toEqual(10)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct width from width prop', () => {
    const width = 15
    const wrapper = shallow(<InfoIcon width={width} />)

    expect(wrapper.prop('width')).toEqual(15)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct height from height prop', () => {
    const height = 15
    const wrapper = shallow(<InfoIcon height={height} />)

    expect(wrapper.prop('height')).toEqual(15)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct fill style from colorHex prop', () => {
    const colorHex = '#fff'

    const wrapper = shallow(<InfoIcon colorHex={colorHex} />)

    expect(wrapper.prop('style')).toEqual({ fill: colorHex })

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct className from className prop', () => {
    const className = 'test-classname'
    const wrapper = shallow(<InfoIcon className={className} />)

    expect(wrapper.prop('className')).toContain(className)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct style from style prop', () => {
    const style = { marginBottom: '10px' }

    const wrapper = shallow(<InfoIcon style={style} />)

    expect(wrapper.prop('style')).toEqual({ fill: '#000', ...style })

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

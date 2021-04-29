import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Wave } from '.'

describe('<Wave />', () => {
  it('should renders correct <Wave />', () => {
    const wrapper = shallow(<Wave />)

    expect(wrapper.prop('className')).toContain('fill-secondary')
    expect(wrapper.prop('className')).toContain('bottom-full')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct class name with bottom position prop', () => {
    const position = 'bottom'

    const wrapper = shallow(<Wave position={position} />)

    expect(wrapper.prop('className')).toContain('top-full')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct class name with bottom-revert position prop', () => {
    const position = 'bottom-revert'

    const wrapper = shallow(<Wave position={position} />)

    expect(wrapper.prop('className')).toContain(
      'top-full transform -translate-y-full'
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct class name with white colorName prop', () => {
    const colorName = 'white'

    const wrapper = shallow(<Wave colorName={colorName} />)

    expect(wrapper.prop('className')).toContain('fill-white')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct class name with black colorName prop', () => {
    const colorName = 'black'

    const wrapper = shallow(<Wave colorName={colorName} />)

    expect(wrapper.prop('className')).toContain('fill-black')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct class name with primary colorName prop', () => {
    const colorName = 'primary'

    const wrapper = shallow(<Wave colorName={colorName} />)

    expect(wrapper.prop('className')).toContain('fill-primary')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct class name with brown colorName prop', () => {
    const colorName = 'brown'

    const wrapper = shallow(<Wave colorName={colorName} />)

    expect(wrapper.prop('className')).toContain('fill-brown')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct class name with yellow colorName prop', () => {
    const colorName = 'yellow'

    const wrapper = shallow(<Wave colorName={colorName} />)

    expect(wrapper.prop('className')).toContain('fill-yellow')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has fill style prop from colorHex prop', () => {
    const colorHex = '#000'

    const wrapper = shallow(<Wave colorHex={colorHex} />)

    expect(wrapper.prop('style')).toEqual({ fill: colorHex })

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct class name from className prop', () => {
    const className = 'test-class-name'

    const wrapper = shallow(<Wave className={className} />)

    expect(wrapper.prop('className')).toContain(className)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct style attribute from props', () => {
    const colorHex = '#000'
    const style = { zIndex: 1 }

    const wrapper = shallow(<Wave colorHex={colorHex} style={style} />)

    expect(wrapper.prop('style')).toEqual({ fill: colorHex, ...style })

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

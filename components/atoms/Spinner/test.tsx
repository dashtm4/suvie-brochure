import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Spinner } from '.'

describe('<Spinner />', () => {
  it('should renders correct <Spinner />', () => {
    const wrapper = shallow(<Spinner />)

    expect(wrapper.prop('width')).toEqual(16)
    expect(wrapper.prop('height')).toEqual(16)
    expect(wrapper.find('circle').prop('stroke')).toMatch('#fff')
    expect(wrapper.find('path').prop('fill')).toMatch('#fff')

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct width from width prop', () => {
    const width = 24
    const wrapper = shallow(<Spinner width={width} />)

    expect(wrapper.prop('width')).toEqual(width)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct height from height prop', () => {
    const height = 24
    const wrapper = shallow(<Spinner height={height} />)

    expect(wrapper.prop('height')).toEqual(height)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct color from colorHex prop', () => {
    const colorHex = '#000'
    const wrapper = shallow(<Spinner colorHex={colorHex} />)

    expect(wrapper.find('circle').prop('stroke')).toMatch(colorHex)
    expect(wrapper.find('path').prop('fill')).toMatch(colorHex)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

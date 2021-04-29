import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Badge } from '.'

describe('<Badge />', () => {
  const children = 'Test children'

  it('should renders correct <Badge />', () => {
    const wrapper = shallow(<Badge>{children}</Badge>)

    expect(wrapper.contains(children)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should renders correct <Badge /> with correct className prop', () => {
    const className = 'Test classname'

    const wrapper = shallow(<Badge className={className}>{children}</Badge>)

    expect(wrapper.prop('className')).toContain(className)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should renders correct <Badge /> with correct style prop', () => {
    const style = { width: '10rem' }

    const wrapper = shallow(<Badge style={style}>{children}</Badge>)

    expect(wrapper.prop('style')).toEqual(style)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

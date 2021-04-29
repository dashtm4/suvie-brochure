import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Button } from '.'

describe('<Button />', () => {
  it('should renders children', () => {
    const text = 'test'

    const wrapper = shallow(<Button>{text}</Button>)

    expect(wrapper.text()).toMatch(text)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should simulates click events', () => {
    const onButtonClick = jest.fn()

    const wrapper = shallow(<Button onClick={onButtonClick} />)

    wrapper.simulate('click')

    expect(onButtonClick).toHaveBeenCalledTimes(1)
  })

  it('should uses correct classes for default button', () => {
    const wrapper = shallow(<Button />)

    expect(wrapper.find('button').hasClass('btn_primary')).toBeTruthy()
  })

  it('should uses correct classes for simple theme button', () => {
    const wrapper = shallow(<Button theme="simple" />)

    expect(wrapper.find('button').hasClass('btn_simple')).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should uses correct classes for outline theme button', () => {
    const wrapper = shallow(<Button theme="outline" />)

    expect(wrapper.find('button').hasClass('btn_outline')).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it("should doesn't show svg by default", () => {
    const wrapper = shallow(<Button isLoading={false} />)

    expect(wrapper.find('svg').exists()).toBeFalsy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it("should doesn't show svg if isLoading prop is false", () => {
    const wrapper = shallow(<Button isLoading={false} />)

    expect(wrapper.find('svg').exists()).toBeFalsy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should show svg if isLoading prop is true', () => {
    const wrapper = shallow(<Button isLoading={true} />)

    expect(wrapper.find('svg').exists()).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should sets additional class name', () => {
    const wrapper = shallow(<Button className="w-full" />)

    expect(wrapper.find('button').hasClass('w-full')).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

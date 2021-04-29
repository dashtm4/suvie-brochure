import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { FormGroup } from '.'

describe('<FormGroup />', () => {
  it('should contain correct root element className with default props', () => {
    const name = 'test'

    const wrapper = shallow(<FormGroup name={name} />)

    expect(wrapper.find('div').prop('className')).toMatch('form__group ')

    expect(wrapper.find('FormField').props()).toEqual({
      name: name,
      type: 'text',
      title: 'Test',
      placeholder: undefined,
      component: undefined,
      isError: undefined,
      readOnly: undefined,
      disabled: undefined
    })

    expect(wrapper.find('FormError').props()).toEqual({
      name: name
    })

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should contain correct root element className with not default props', () => {
    const name = 'test'
    const className = 'mb-2'

    const wrapper = shallow(<FormGroup name={name} className={className} />)

    expect(wrapper.find('div').prop('className')).toMatch(
      `form__group ${className}`
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should contain correct FormField with props', () => {
    const name = 'test'

    const wrapper = shallow(<FormGroup name={name} />)

    expect(wrapper.find('FormField').props()).toEqual({
      name: name,
      type: 'text',
      title: 'Test',
      placeholder: undefined,
      component: undefined,
      isError: undefined,
      readOnly: undefined,
      disabled: undefined
    })

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should contain correct FormField with type prop', () => {
    const name = 'test'
    const type = 'email'

    const wrapper = shallow(<FormGroup name={name} type={type} />)

    expect(wrapper.find('FormField').prop('type')).toMatch(type)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should contain correct FormField with title prop', () => {
    const name = 'test'
    const title = 'Example title'

    const wrapper = shallow(<FormGroup name={name} title={title} />)

    expect(wrapper.find('FormField').prop('title')).toMatch(title)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should contain correct FormField with placeholder prop', () => {
    const name = 'test'
    const placeholder = 'Example placeholder'

    const wrapper = shallow(<FormGroup name={name} placeholder={placeholder} />)

    expect(wrapper.find('FormField').prop('placeholder')).toMatch(placeholder)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should contain correct FormField with component prop', () => {
    const name = 'test'
    const component = 'span'

    const wrapper = shallow(<FormGroup name={name} component={component} />)

    expect(wrapper.find('FormField').prop('component')).toMatch(component)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should contain correct FormField with isError prop', () => {
    const name = 'test'
    const isError = true

    const wrapper = shallow(<FormGroup name={name} isError={isError} />)

    expect(wrapper.find('FormField').prop('isError')).toEqual(isError)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should contain correct FormField with readOnly prop', () => {
    const name = 'test'
    const readOnly = true

    const wrapper = shallow(<FormGroup name={name} readOnly={readOnly} />)

    expect(wrapper.find('FormField').prop('readOnly')).toEqual(readOnly)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should contain correct FormField with disabled prop', () => {
    const name = 'test'
    const disabled = true

    const wrapper = shallow(<FormGroup name={name} disabled={disabled} />)

    expect(wrapper.find('FormField').prop('disabled')).toEqual(disabled)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should contain correct FormError with props', () => {
    const name = 'test'

    const wrapper = shallow(<FormGroup name={name} />)

    expect(wrapper.find('FormError').props()).toEqual({
      name: name
    })

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

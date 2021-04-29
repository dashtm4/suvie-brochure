import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { FormField } from '.'

describe('<FormField />', () => {
  it('should has correct props', () => {
    const name = 'test'

    const wrapper = shallow(<FormField name={name} />)

    expect(wrapper.props()).toEqual({
      name: name,
      type: 'text',
      className: 'form__control ',
      title: 'Test',
      placeholder: 'Test',
      component: undefined,
      readOnly: undefined,
      disabled: undefined
    })

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct type prop', () => {
    const name = 'test'
    const type = 'email'

    const wrapper = shallow(<FormField name={name} type={type} />)

    expect(wrapper.prop('type')).toMatch(type)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct className prop', () => {
    const name = 'test'
    const className = 'test'

    const wrapper = shallow(<FormField name={name} className="test" />)

    expect(wrapper.prop('className')).toMatch(`form__control ${className}`)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct title prop', () => {
    const name = 'test'
    const title = 'Example title'

    const wrapper = shallow(<FormField name={name} title={title} />)

    expect(wrapper.prop('title')).toMatch(title)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct placeholder prop', () => {
    const name = 'test'
    const placeholder = 'Example placeholder'

    const wrapper = shallow(<FormField name={name} placeholder={placeholder} />)

    expect(wrapper.prop('placeholder')).toMatch(placeholder)
  })

  it('should has correct component prop', () => {
    const name = 'test'
    const component = 'select'

    const wrapper = shallow(<FormField name={name} component={component} />)

    expect(wrapper.prop('component')).toMatch(component)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct readOnly prop', () => {
    const name = 'test'
    const readOnly = true

    const wrapper = shallow(<FormField name={name} readOnly={readOnly} />)

    expect(wrapper.prop('readOnly')).toEqual(readOnly)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct disabled prop', () => {
    const name = 'test'
    const disabled = true

    const wrapper = shallow(<FormField name={name} disabled={disabled} />)

    expect(wrapper.prop('disabled')).toEqual(disabled)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

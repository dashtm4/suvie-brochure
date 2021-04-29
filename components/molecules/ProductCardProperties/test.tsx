import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ProductCardProperties } from '.'

describe('<ProductCardProperties />', () => {
  const title = 'Test title'
  const properties = [{ item: 'Property 1' }, { item: 'Property 2' }]

  it('should renders correct <ProductCardProperties />', () => {
    const wrapper = shallow(
      <ProductCardProperties title={title} properties={properties} />
    )

    expect(wrapper.contains(title)).toBeTruthy()
    expect(wrapper.contains(properties[0].item)).toBeTruthy()
    expect(wrapper.contains(properties[1].item)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has className from prop', () => {
    const className = 'test-class-name'

    const wrapper = shallow(
      <ProductCardProperties
        title={title}
        properties={properties}
        className={className}
      />
    )

    expect(wrapper.prop('className')).toContain(className)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

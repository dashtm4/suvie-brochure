import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { ProductCardImage } from '.'

describe('<ProductCardImage />', () => {
  const imageSrc = 'image.jpg'
  const alt = 'Test alt'

  it('should renders correct <ProductCardImage />', () => {
    const wrapper = shallow(<ProductCardImage imageSrc={imageSrc} alt={alt} />)

    expect(wrapper.find('Image').prop('src')).toMatch(imageSrc)
    expect(wrapper.find('Image').prop('alt')).toMatch(alt)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { GalleryModal } from '.'

describe('<GalleryModal />', () => {
  it('should renders correct <ProductCardModalContent />', () => {
    const toggleModal = jest.fn()
    const children = 'test'

    const wrapper = shallow(
      <GalleryModal toggleModal={toggleModal}>{children}</GalleryModal>
    )

    expect(wrapper.contains(children)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has gallery from prop', () => {
    const toggleModal = jest.fn()
    const children = 'test'
    const gallery = ['image-1.jpg', 'imag2.jpg']

    const wrapper = shallow(
      <GalleryModal toggleModal={toggleModal} gallery={gallery}>
        {children}
      </GalleryModal>
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

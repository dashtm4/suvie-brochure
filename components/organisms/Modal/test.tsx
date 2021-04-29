import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Modal } from '.'

describe('<Modal />', () => {
  it('should renders correct <Modal />', () => {
    const toggleModal = jest.fn()
    const children = 'test'

    const wrapper = shallow(<Modal toggleModal={toggleModal}>{children}</Modal>)

    expect(wrapper.contains(children)).toBeTruthy()

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has no animation', () => {
    const toggleModal = jest.fn()
    const children = 'test'
    const animation = 'none'

    const wrapper = shallow(
      <Modal toggleModal={toggleModal} animation={animation}>
        {children}
      </Modal>
    )

    expect(wrapper.find('.animate-none')).toHaveLength(1)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

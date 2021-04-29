import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { FooterMenu } from '.'

describe('<FooterMenu />', () => {
  it('should renders correct html', () => {
    const menu = [
      {
        title: 'About',
        url: '/about'
      },
      {
        title: 'Example',
        url: 'https://example.com',
        external: true
      }
    ]

    const wrapper = shallow(<FooterMenu menu={menu} />)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

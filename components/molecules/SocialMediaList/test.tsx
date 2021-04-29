import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { SocialMediaList } from '.'

describe('<SocialMediaList />', () => {
  it('should has correct child', () => {
    const socialMediaList = [
      {
        title: 'Facebook',
        url: 'https://www.facebook.com/SuvieFood/',
        icon: '/images/facebook-icon.svg'
      },
      {
        title: 'Twitter',
        url: 'https://twitter.com/suviefood',
        icon: '/images/twitter-icon.svg'
      }
    ]

    const wrapper = shallow(<SocialMediaList list={socialMediaList} />)

    expect(wrapper.find('ul.flex.w-full li.mr-2 SocialMediaIcon')).toHaveLength(
      2
    )

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

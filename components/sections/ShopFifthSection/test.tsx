import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { MockedProvider } from '@apollo/client/testing'
import waitForExpect from 'wait-for-expect'
import { SHOP_PAGE_QUERY } from '@queries'

import { ShopFifthSection } from '.'

describe('<ShopFifthSection />', () => {
  const faqs = []

  const mock = {
    request: {
      query: SHOP_PAGE_QUERY
    },
    result: {
      data: {
        shop_page: {
          faqs
        }
      }
    }
  }

  it('should renders correct <ShopFifthSection />', async (done) => {
    const wrapper = shallow(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <ShopFifthSection />
      </MockedProvider>
    )

    await waitForExpect(() => {
      wrapper.update()

      expect(toJSON(wrapper)).toMatchSnapshot()

      done()
    })
  })
})

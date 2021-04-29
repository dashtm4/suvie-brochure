import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { MockedProvider } from '@apollo/client/testing'
import waitForExpect from 'wait-for-expect'

import { PRODUCTS_QUERY } from '@queries'

import { HomeCallToActionSection } from '.'

describe('<HomeCallToActionSection />', () => {
  const products = []

  const productsMock = {
    request: {
      query: PRODUCTS_QUERY
    },
    result: {
      data: {
        shop_page: {
          products
        }
      }
    }
  }

  it('should renders correct <HomeCallToActionSection />', async (done) => {
    const wrapper = shallow(
      <MockedProvider mocks={[productsMock]} addTypename={false}>
        <HomeCallToActionSection />
      </MockedProvider>
    )

    await waitForExpect(() => {
      wrapper.update()

      expect(toJSON(wrapper)).toMatchSnapshot()

      done()
    })
  })
})

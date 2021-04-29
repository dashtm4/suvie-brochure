import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { MockedProvider } from '@apollo/client/testing'
import waitForExpect from 'wait-for-expect'

import { PRODUCTS_QUERY, SMART_MEALS_QUERY } from '@queries'

import { ShopFirstSection } from '.'

describe('<ShopFirstSection />', () => {
  const products = []
  const smartMeals = {}

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

  const smartMealsMock = {
    request: {
      query: SMART_MEALS_QUERY
    },
    result: {
      data: {
        shop_page: {
          smartMeals
        }
      }
    }
  }

  it('should renders correct <ShopFirstSection />', async (done) => {
    const wrapper = shallow(
      <MockedProvider
        mocks={[productsMock, smartMealsMock]}
        addTypename={false}
      >
        <ShopFirstSection />
      </MockedProvider>
    )

    await waitForExpect(() => {
      wrapper.update()

      expect(toJSON(wrapper)).toMatchSnapshot()

      done()
    })
  })
})

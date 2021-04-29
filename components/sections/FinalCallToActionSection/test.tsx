import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { MockedProvider } from '@apollo/client/testing'
import waitForExpect from 'wait-for-expect'

import { PRODUCTS_QUERY } from '@queries'

import { FinalCallToActionSection } from '.'

describe('<FinalCallToActionSection />', () => {
  const product = {}

  const productMock = {
    request: {
      query: PRODUCTS_QUERY
    },
    result: {
      data: {
        product
      }
    }
  }

  it('should renders correct <FinalCallToActionSection />', async (done) => {
    const wrapper = shallow(
      <MockedProvider mocks={[productMock]} addTypename={false}>
        <FinalCallToActionSection />
      </MockedProvider>
    )

    await waitForExpect(() => {
      wrapper.update()

      expect(toJSON(wrapper)).toMatchSnapshot()

      done()
    })
  })
})

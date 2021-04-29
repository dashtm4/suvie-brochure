import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { MockedProvider } from '@apollo/client/testing'
import waitForExpect from 'wait-for-expect'

import { PRODUCTS_QUERY } from '@queries'

import { StartingAt } from '.'

describe('<StartingAt />', () => {
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

  it('should renders correct <StartingAt />', async (done) => {
    const wrapper = shallow(
      <MockedProvider mocks={[productMock]} addTypename={false}>
        <StartingAt />
      </MockedProvider>
    )

    await waitForExpect(() => {
      wrapper.update()

      expect(toJSON(wrapper)).toMatchSnapshot()

      done()
    })
  })

  it('should has correct className from className prop', async (done) => {
    const className = 'test-class-name'

    const wrapper = shallow(
      <MockedProvider mocks={[productMock]} addTypename={false}>
        <StartingAt className={className} />
      </MockedProvider>
    )

    await waitForExpect(() => {
      wrapper.update()

      expect(wrapper.find('StartingAt').prop('className')).toContain(className)

      expect(toJSON(wrapper)).toMatchSnapshot()

      done()
    })
  })
})

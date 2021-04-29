import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { MockedProvider } from '@apollo/client/testing'
import waitForExpect from 'wait-for-expect'

import { HOME_PAGE_QUERY } from '@queries'

import { HomeTemplate } from '.'

describe('<HomeTemplate />', () => {
  const reviews = []

  const mock = {
    request: {
      query: HOME_PAGE_QUERY
    },
    result: {
      data: {
        home_page: {
          reviews_list: {
            reviews
          }
        }
      }
    }
  }

  it('should renders correct <HomeTemplate />', async (done) => {
    const wrapper = shallow(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <HomeTemplate />
      </MockedProvider>
    )

    await waitForExpect(() => {
      wrapper.update()

      expect(toJSON(wrapper)).toMatchSnapshot()

      done()
    })
  })
})

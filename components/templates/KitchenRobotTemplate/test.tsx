import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { MockedProvider } from '@apollo/client/testing'
import waitForExpect from 'wait-for-expect'

import { KITCHEN_ROBOT_PAGE_QUERY } from '@queries'

import { KitchenRobotTemplate } from '.'

describe('<KitchenRobotTemplate />', () => {
  const reviews = []

  const mock = {
    request: {
      query: KITCHEN_ROBOT_PAGE_QUERY
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

  it('should renders correct <KitchenRobotTemplate />', async (done) => {
    const wrapper = shallow(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <KitchenRobotTemplate />
      </MockedProvider>
    )

    await waitForExpect(() => {
      wrapper.update()

      expect(toJSON(wrapper)).toMatchSnapshot()

      done()
    })
  })
})

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { MockedProvider } from '@apollo/client/testing'
import waitForExpect from 'wait-for-expect'

import { HEALTH_PAGE_QUERY } from '@queries'

import { HealthThirdSection } from '.'

describe('<HealthThirdSection />', () => {
  const meals = []

  const mock = {
    request: {
      query: HEALTH_PAGE_QUERY
    },
    result: {
      data: {
        health_page: {
          meals_list: {
            meals
          }
        }
      }
    }
  }

  it('should renders correct <HealthThirdSection />', async (done) => {
    const wrapper = shallow(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <HealthThirdSection />
      </MockedProvider>
    )

    await waitForExpect(() => {
      wrapper.update()

      expect(toJSON(wrapper)).toMatchSnapshot()

      done()
    })
  })
})

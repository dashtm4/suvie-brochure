import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { MockedProvider } from '@apollo/client/testing'
import waitForExpect from 'wait-for-expect'

import { SMART_MEALS_PAGE_QUERY } from '@queries'

import { SmartMealsForthSection } from '.'

describe('<SmartMealsForthSection />', () => {
  const meals = []

  const mock = {
    request: {
      query: SMART_MEALS_PAGE_QUERY
    },
    result: {
      data: {
        smart_meals_page: {
          meals_list: {
            meals
          }
        }
      }
    }
  }

  it('should renders correct <SmartMealsForthSection />', async (done) => {
    const wrapper = shallow(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <SmartMealsForthSection />
      </MockedProvider>
    )

    await waitForExpect(() => {
      wrapper.update()

      expect(toJSON(wrapper)).toMatchSnapshot()

      done()
    })
  })
})

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { MockedProvider } from '@apollo/client/testing'
import waitForExpect from 'wait-for-expect'

import { HOME_PAGE_QUERY } from '@queries'

import { HomeMealsSection } from '.'

describe('<HomeMealsSection />', () => {
  const meals = []

  const mock = {
    request: {
      query: HOME_PAGE_QUERY
    },
    result: {
      data: {
        home_page: {
          meals_list: {
            meals
          }
        }
      }
    }
  }

  it('should renders correct <HomeMealsSection />', async (done) => {
    const wrapper = shallow(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <HomeMealsSection />
      </MockedProvider>
    )

    await waitForExpect(() => {
      wrapper.update()

      expect(toJSON(wrapper)).toMatchSnapshot()

      done()
    })
  })
})

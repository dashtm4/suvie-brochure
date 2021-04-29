import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { MockedProvider } from '@apollo/client/testing'
import waitForExpect from 'wait-for-expect'

import { RECIPES_PAGE_QUERY } from '@queries'

import { RecipesSection } from '.'

describe('<RecipesSection />', () => {
  const meals = []

  const mock = {
    request: {
      query: RECIPES_PAGE_QUERY
    },
    result: {
      data: {
        recipes_page: {
          meals_list: {
            meals
          }
        }
      }
    }
  }

  it('should renders correct <RecipesSection />', async (done) => {
    const wrapper = shallow(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <RecipesSection />
      </MockedProvider>
    )

    await waitForExpect(() => {
      wrapper.update()

      expect(toJSON(wrapper)).toMatchSnapshot()

      done()
    })
  })
})

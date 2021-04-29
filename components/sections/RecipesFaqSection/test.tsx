import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { MockedProvider } from '@apollo/client/testing'
import waitForExpect from 'wait-for-expect'
import { RECIPES_PAGE_QUERY } from '@queries'

import { RecipesFaqSection } from '.'

describe('<RecipesFaqSection />', () => {
  const faqs = []

  const mock = {
    request: {
      query: RECIPES_PAGE_QUERY
    },
    result: {
      data: {
        recipes_page: {
          faqs
        }
      }
    }
  }

  it('should renders correct <RecipesFaqSection />', async (done) => {
    const wrapper = shallow(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <RecipesFaqSection />
      </MockedProvider>
    )

    await waitForExpect(() => {
      wrapper.update()

      expect(toJSON(wrapper)).toMatchSnapshot()

      done()
    })
  })
})

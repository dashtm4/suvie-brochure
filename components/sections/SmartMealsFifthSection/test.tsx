import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { MockedProvider } from '@apollo/client/testing'
import waitForExpect from 'wait-for-expect'
import { SMART_MEALS_PAGE_QUERY } from '@queries'

import { SmartMealsFifthSection } from '.'

describe('<SmartMealsFifthSection />', () => {
  const faqs = []

  const mock = {
    request: {
      query: SMART_MEALS_PAGE_QUERY
    },
    result: {
      data: {
        smart_meals_page: {
          faqs
        }
      }
    }
  }

  it('should renders correct <SmartMealsFifthSection />', async (done) => {
    const wrapper = shallow(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <SmartMealsFifthSection />
      </MockedProvider>
    )

    await waitForExpect(() => {
      wrapper.update()

      expect(toJSON(wrapper)).toMatchSnapshot()

      done()
    })
  })
})

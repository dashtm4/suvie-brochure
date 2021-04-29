import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { MockedProvider } from '@apollo/client/testing'
import waitForExpect from 'wait-for-expect'
import { FREE_TRIAL_PAGE_QUERY } from '@queries'

import { FreeTrialFaqSection } from '.'

describe('<FreeTrialFaqSection />', () => {
  const faqs = []

  const mock = {
    request: {
      query: FREE_TRIAL_PAGE_QUERY
    },
    result: {
      data: {
        free_trial_page: {
          faqs
        }
      }
    }
  }

  it('should renders correct <FreeTrialFaqSection />', async (done) => {
    const wrapper = shallow(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <FreeTrialFaqSection />
      </MockedProvider>
    )

    await waitForExpect(() => {
      wrapper.update()

      expect(toJSON(wrapper)).toMatchSnapshot()

      done()
    })
  })
})

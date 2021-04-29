import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { MockedProvider } from '@apollo/client/testing'
import waitForExpect from 'wait-for-expect'
import { HEALTH_PAGE_QUERY } from '@queries'

import { HealthForthSection } from '.'

describe('<HealthForthSection />', () => {
  const faqs = []

  const mock = {
    request: {
      query: HEALTH_PAGE_QUERY
    },
    result: {
      data: {
        health_page: {
          faqs
        }
      }
    }
  }

  it('should renders correct <HealthForthSection />', async (done) => {
    const wrapper = shallow(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <HealthForthSection />
      </MockedProvider>
    )

    await waitForExpect(() => {
      wrapper.update()

      expect(toJSON(wrapper)).toMatchSnapshot()

      done()
    })
  })
})

import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { MockedProvider } from '@apollo/client/testing'
import waitForExpect from 'wait-for-expect'
import { FAQ_PAGE_QUERY } from '@queries'

import { FaqTemplate } from '.'

describe('<FaqTemplate />', () => {
  const faqs = []

  const mock = {
    request: {
      query: FAQ_PAGE_QUERY
    },
    result: {
      data: {
        faq_page: {
          faqs
        }
      }
    }
  }

  it('should renders correct <FaqTemplate />', async (done) => {
    const wrapper = shallow(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <FaqTemplate />
      </MockedProvider>
    )

    await waitForExpect(() => {
      wrapper.update()

      expect(toJSON(wrapper)).toMatchSnapshot()

      done()
    })
  })
})

import { mount } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { MockedProvider } from '@apollo/client/testing'
import waitForExpect from 'wait-for-expect'

import { URGENCY_BAR_QUERY } from '@queries'

import { UrgencyBar } from '.'

describe('<UrgencyBar />', () => {
  const urgencyBar = {
    info: {
      title: 'Test title',
      subtitle: 'Test subtitle',
      description: 'Test description'
    },
    percentage: 65
  }

  const mock = {
    request: {
      query: URGENCY_BAR_QUERY
    },
    result: {
      data: {
        urgencyBar
      }
    }
  }

  it('should renders correct <UrgencyBar />', async (done) => {
    const wrapper = mount(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <UrgencyBar />
      </MockedProvider>
    )

    await waitForExpect(() => {
      wrapper.update()

      expect(wrapper.contains(urgencyBar.info.title)).toBeTruthy()
      expect(wrapper.contains(urgencyBar.info.subtitle)).toBeTruthy()
      expect(wrapper.html()).toContain(urgencyBar.info.description)

      expect(toJSON(wrapper)).toMatchSnapshot()

      done()
    })
  })
})

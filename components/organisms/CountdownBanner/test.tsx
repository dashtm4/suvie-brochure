import { mount } from 'enzyme'
import { MockedProvider } from '@apollo/client/testing'
import waitForExpect from 'wait-for-expect'

import { CountdownBanner } from '.'
import { COUNTDOWN_BANNER_QUERY } from '@queries'

describe('<CountdownBanner />', () => {
  it('should renders correct <CountdownBanner />', async (done) => {
    const countdownBanner = {
      title: 'Test title',
      subtitle: 'Test subtitle',
      endTime: Date.now() + 10000
    }

    const mock = {
      request: {
        query: COUNTDOWN_BANNER_QUERY
      },
      result: {
        data: {
          countdownBanner
        }
      }
    }

    const wrapper = mount(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <CountdownBanner />
      </MockedProvider>
    )

    await waitForExpect(() => {
      wrapper.update()

      expect(wrapper.contains(countdownBanner.title)).toBeTruthy()
      expect(wrapper.contains(countdownBanner.subtitle)).toBeTruthy()

      done()
    })
  })

  it('should not renders component, when countdownBanner is empty', async (done) => {
    const countdownBanner = {}

    const mock = {
      request: {
        query: COUNTDOWN_BANNER_QUERY
      },
      result: {
        data: {
          countdownBanner
        }
      }
    }

    const wrapper = mount(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <CountdownBanner />
      </MockedProvider>
    )

    await waitForExpect(() => {
      wrapper.update()

      expect(wrapper.html()).toMatch('')

      done()
    })
  })

  it('should not renders component, when endTime is in the past', async (done) => {
    const countdownBanner = {
      title: 'Test title',
      subtitle: 'Test subtitle',
      endTime: Date.now() - 10000
    }

    const mock = {
      request: {
        query: COUNTDOWN_BANNER_QUERY
      },
      result: {
        data: {
          countdownBanner
        }
      }
    }

    const wrapper = mount(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <CountdownBanner />
      </MockedProvider>
    )

    await waitForExpect(() => {
      wrapper.update()

      expect(wrapper.html()).toMatch('')

      done()
    })
  })
})

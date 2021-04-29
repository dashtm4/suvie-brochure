import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'
import { MockedProvider } from '@apollo/client/testing'
import waitForExpect from 'wait-for-expect'

import { SMART_MEALS_PLANS_QUERY } from '@queries'

import { SmartMealsThirdSection } from '.'

describe('<SmartMealsThirdSection />', () => {
  const smartMealsPlans = []

  const mock = {
    request: {
      query: SMART_MEALS_PLANS_QUERY
    },
    result: {
      data: {
        smartMealsPlans
      }
    }
  }

  it('should renders correct <SmartMealsThirdSection />', async (done) => {
    const wrapper = shallow(
      <MockedProvider mocks={[mock]} addTypename={false}>
        <SmartMealsThirdSection />
      </MockedProvider>
    )

    await waitForExpect(() => {
      wrapper.update()

      expect(toJSON(wrapper)).toMatchSnapshot()

      done()
    })
  })
})

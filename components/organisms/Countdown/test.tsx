import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Countdown } from '.'

describe('<Countdown />', () => {
  it('should renders correct <Countdown />', () => {
    const days = 10
    const hours = 12
    const minutes = 30
    const seconds = 59

    const wrapper = shallow(
      <Countdown
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    )

    expect(wrapper.html()).toContain(days)
    expect(wrapper.html()).toContain(hours)
    expect(wrapper.html()).toContain(minutes)
    expect(wrapper.html()).toContain(seconds)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should renders correct <Countdown /> with zero pad values', () => {
    const days = 1
    const hours = 2
    const minutes = 3
    const seconds = 4

    const wrapper = shallow(
      <Countdown
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    )

    expect(wrapper.html()).toContain(`0${days}`)
    expect(wrapper.html()).toContain(`0${hours}`)
    expect(wrapper.html()).toContain(`0${minutes}`)
    expect(wrapper.html()).toContain(`0${seconds}`)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

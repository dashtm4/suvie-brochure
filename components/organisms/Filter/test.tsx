import { shallow } from 'enzyme'
import toJSON from 'enzyme-to-json'

import { Filter } from '.'

describe('<Filter />', () => {
  const title = 'Test title'
  const list = ['Test name 1', 'Test name 2']

  it('should renders correct <Filter />', () => {
    const handleClick = jest.fn()

    const wrapper = shallow(
      <Filter title={title} list={list} handleClick={handleClick} />
    )

    expect(wrapper.find('FilterButton').at(0).prop('name')).toMatch('All')
    expect(wrapper.contains(title)).toBeTruthy()
    expect(wrapper.find('FilterButton').at(1).prop('name')).toMatch(list[0])
    expect(wrapper.find('FilterButton').at(2).prop('name')).toMatch(list[1])

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct active button', () => {
    const handleClick = jest.fn()
    const currentItemName = 'Test name 2'

    const wrapper = shallow(
      <Filter
        title={title}
        list={list}
        handleClick={handleClick}
        currentItemName={currentItemName}
      />
    )

    expect(wrapper.find('FilterButton').at(2).prop('isCurrent')).toEqual(true)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct defaultName from prop', () => {
    const handleClick = jest.fn()
    const defaultName = 'Test default name'

    const wrapper = shallow(
      <Filter
        title={title}
        list={list}
        handleClick={handleClick}
        defaultName={defaultName}
      />
    )

    expect(wrapper.find('FilterButton').at(0).prop('name')).toMatch(defaultName)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })

  it('should has correct className from className prop', () => {
    const handleClick = jest.fn()
    const className = 'test-classname'

    const wrapper = shallow(
      <Filter
        title={title}
        list={list}
        handleClick={handleClick}
        className={className}
      />
    )

    expect(wrapper.prop('className')).toContain(className)

    expect(toJSON(wrapper)).toMatchSnapshot()
  })
})

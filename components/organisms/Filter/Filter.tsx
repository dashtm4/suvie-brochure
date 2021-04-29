import { FC, memo } from 'react'

import { FilterButton } from '@components/molecules'

export interface IFilterProps {
  title: string
  list: string[]
  handleClick: (item: string) => void
  currentItemName?: string
  defaultName?: string
  className?: string
}

export const Filter: FC<IFilterProps> = memo(
  ({
    title,
    list,
    handleClick,
    currentItemName,
    defaultName = 'All',
    className = ''
  }: IFilterProps) => (
    <div className={className}>
      <h3 className="mb-3 text-xs font-bold leading-none tracking-widest uppercase text-secondary md:mb-2">
        {title}
      </h3>
      <ul className="flex gap-2 pb-2 overflow-x-auto md:flex-wrap md:pb-0">
        <li>
          <FilterButton
            name={defaultName}
            isCurrent={currentItemName === defaultName}
            handleClick={handleClick}
          />
        </li>
        {list.map((item) => (
          <li key={item}>
            <FilterButton
              name={item}
              isCurrent={item === currentItemName}
              handleClick={handleClick}
            />
          </li>
        ))}
      </ul>
    </div>
  )
)

Filter.displayName = 'Filter'

export default Filter

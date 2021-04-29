import { FC, memo } from 'react'
import classNames from 'classnames'

import { InfoIcon } from '@components/atoms'

export interface IFilterButtonProps {
  name: string
  description?: string
  isCurrent: boolean
  handleClick: (item: string) => void
}

export const FilterButton: FC<IFilterButtonProps> = memo(
  ({ name, description, isCurrent, handleClick }: IFilterButtonProps) => (
    <button
      className={classNames(
        'group inline-flex gap-1 py-2 px-4 font-bold tracking-widest leading-none text-center uppercase whitespace-nowrap rounded-lg border text-secondary border-secondary hover:text-white hover:bg-secondary text-xs',
        {
          'text-white bg-secondary': isCurrent
        }
      )}
      onClick={() => handleClick(name)}
    >
      {name}
      {description && (
        <InfoIcon
          className={classNames({
            'fill-secondary group-hover:fill-white': !isCurrent,
            'fill-white': isCurrent
          })}
        />
      )}
    </button>
  )
)

FilterButton.displayName = 'FilterButton'

export default FilterButton

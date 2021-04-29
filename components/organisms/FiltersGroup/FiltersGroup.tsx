import { FC, memo, ReactNode } from 'react'
import classNames from 'classnames'

export interface IFiltersGroupProps {
  children: ReactNode
  className?: string
}

export const FiltersGroup: FC<IFiltersGroupProps> = memo(
  ({ children, className = '' }: IFiltersGroupProps) => (
    <div
      className={classNames('md:flex md:gap-4 md:justify-center', className)}
    >
      {children}
    </div>
  )
)

FiltersGroup.displayName = 'FiltersGroup'

export default FiltersGroup

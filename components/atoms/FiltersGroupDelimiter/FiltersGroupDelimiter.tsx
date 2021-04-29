import { FC, memo } from 'react'

export interface IFiltersGroupDelimiterProps {}

export const FiltersGroupDelimiter: FC<IFiltersGroupDelimiterProps> = memo(
  () => (
    <div className="hidden md:block md:border md:border-left md:border-secondary" />
  )
)

FiltersGroupDelimiter.displayName = 'FiltersGroupDelimiter'

export default FiltersGroupDelimiter

import { FC, memo } from 'react'

export interface IMealModalPropertiesListItemProps {
  name: string
  value: string | number
}

export const MealModalPropertiesListItem: FC<IMealModalPropertiesListItemProps> = memo(
  ({ name, value }: IMealModalPropertiesListItemProps) => (
    <li className="flex items-center justify-center mb-2 last:mb-0 md:block">
      <span className="uppercase font-bold text-sm mr-4">{name}</span>{' '}
      <span className="font-serif font-normal text-lg">{value}</span>
    </li>
  )
)

MealModalPropertiesListItem.displayName = 'MealModalPropertiesListItem'

export default MealModalPropertiesListItem

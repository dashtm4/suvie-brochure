import { FC, memo, ReactNode, RefObject } from 'react'

export interface IMealModalPropertiesListProps {
  forwardRef?: RefObject<HTMLUListElement>
  children: ReactNode
  className?: string
  style?: Record<string, any>
}

export const MealModalPropertiesList: FC<IMealModalPropertiesListProps> = memo(
  ({
    forwardRef,
    children,
    className = '',
    ...props
  }: IMealModalPropertiesListProps) => (
    <ul ref={forwardRef} className={className} {...props}>
      {children}
    </ul>
  )
)

MealModalPropertiesList.displayName = 'MealModalPropertiesList'

export default MealModalPropertiesList

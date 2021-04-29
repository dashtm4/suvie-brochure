import { FC, memo, ReactNode } from 'react'

export interface ICountdownItemProps {
  children: ReactNode
}

export const CountdownItem: FC<ICountdownItemProps> = memo(
  ({ children }: ICountdownItemProps) => <div className="w-8">{children}</div>
)

CountdownItem.displayName = 'CountdownItem'

export default CountdownItem

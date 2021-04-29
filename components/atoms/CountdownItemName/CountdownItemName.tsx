import { FC, memo, ReactNode } from 'react'

export interface ICountdownItemNameProps {
  children: ReactNode
}

export const CountdownItemName: FC<ICountdownItemNameProps> = memo(
  ({ children }: ICountdownItemNameProps) => (
    <div className="font-serif text-sm font-normal tracking-tighter text-white uppercase">
      {children}
    </div>
  )
)

CountdownItemName.displayName = 'CountdownItemName'

export default CountdownItemName

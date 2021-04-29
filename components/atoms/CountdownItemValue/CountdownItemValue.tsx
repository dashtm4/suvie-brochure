import { FC, memo, ReactNode } from 'react'

export interface ICountdownItemValueProps {
  children: ReactNode
}

export const CountdownItemValue: FC<ICountdownItemValueProps> = memo(
  ({ children }: ICountdownItemValueProps) => (
    <div
      className="mb-1 font-serif font-normal tracking-tighter text-primary-default"
      style={{ fontSize: '1.75rem' }}
    >
      {children}
    </div>
  )
)

CountdownItemValue.displayName = 'CountdownItemValue'

export default CountdownItemValue

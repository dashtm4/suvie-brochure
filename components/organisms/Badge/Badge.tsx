import { FC, memo, ReactNode } from 'react'
import classNames from 'classnames'

import { TTheme } from '@temp/types'

export interface IBadgeProps {
  theme?: TTheme
  className?: string
  children: ReactNode
  style?: Record<string, any>
}

export const Badge: FC<IBadgeProps> = memo(
  ({ theme = 'light', children, className = '', ...props }: IBadgeProps) => (
    <div
      className={classNames(
        'font-bold tracking-widest text-sm uppercase text-center flex justify-center items-center py-2 px-4 rounded-lg leading-none',
        {
          'bg-white text-secondary': theme === 'light',
          'border-white border text-white': theme === 'dark',
          'border-black border text-black': theme === 'light--transparent'
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
)

Badge.displayName = 'Badge'

export default Badge

import { FC, ReactNode, memo } from 'react'
import classNames from 'classnames'

import { TScreenMode } from '@temp/types'

export interface ILayoutProps {
  className?: string
  mode?: TScreenMode
  children?: ReactNode
}

export const Layout: FC<ILayoutProps> = memo(
  ({ className = '', children = null, mode = 'container' }: ILayoutProps) => {
    const width = (() => {
      switch (mode) {
        case 'container':
          return 'max-w-screen-xl px-8'
        case 'container-fluid':
          return 'px-8'
        case 'container-full':
          return ''
      }
    })()

    return (
      <div className={classNames('h-full mx-auto', width, className)}>
        {children}
      </div>
    )
  }
)

Layout.displayName = 'Layout'

export default Layout

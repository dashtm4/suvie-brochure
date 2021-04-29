import { FC, memo, ReactNode } from 'react'
import { TabList } from 'react-tabs'
import classNames from 'classnames'

export interface IHorizontalTabsListProps {
  children: ReactNode
  theme?: 'light' | 'dark'
}

export const HorizontalTabsList: FC<IHorizontalTabsListProps> = memo(
  ({ children, theme = 'dark', ...props }: IHorizontalTabsListProps) => (
    <TabList
      className={classNames(
        'flex justify-between gap-2 font-serif font-normal text-center border-b border-opacity-25 mb-5 overflow-hidden md:flex-nowrap md:gap-6 md:justify-start md:text-lg',
        {
          'border-white': theme === 'dark',
          'border-black': theme === 'light'
        }
      )}
      {...props}
    >
      {children}
    </TabList>
  )
)

// @ts-ignore
HorizontalTabsList.tabsRole = 'TabList'

HorizontalTabsList.displayName = 'HorizontalTabsList'

export default HorizontalTabsList

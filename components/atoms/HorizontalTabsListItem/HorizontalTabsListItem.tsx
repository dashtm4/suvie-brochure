import { FC, memo, ReactNode } from 'react'
import { Tab } from 'react-tabs'
import classNames from 'classnames'

export interface IHorizontalTabsListItemProps {
  children: ReactNode
  theme?: 'light' | 'dark'
}

export const HorizontalTabsListItem: FC<IHorizontalTabsListItemProps> = memo(
  ({ children, theme = 'dark', ...props }: IHorizontalTabsListItemProps) => (
    <Tab
      tabIndex="0"
      className={classNames(
        'text-center md:text-left text-opacity-25 pb-2 md:px-2 cursor-pointer flex-grow',
        {
          'text-white': theme === 'dark',
          'text-black': theme === 'light'
        }
      )}
      {...props}
    >
      {children}
    </Tab>
  )
)

// @ts-ignore
HorizontalTabsListItem.tabsRole = 'Tab'

HorizontalTabsListItem.displayName = 'HorizontalTabsListItem'

export default HorizontalTabsListItem

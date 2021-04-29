import { FC, memo, ReactNode } from 'react'
import dynamic from 'next/dynamic'
import classNames from 'classnames'

const Tabs = dynamic(
  import('react-tabs').then((mod) => mod.Tabs),
  { ssr: false }
)

export interface IHorizontalTabsProps {
  selectedIndex: number
  onSelect: (index: number) => void
  children: ReactNode
  className?: string
}

export const HorizontalTabs: FC<IHorizontalTabsProps> = memo(
  ({
    selectedIndex,
    onSelect,
    children,
    className,
    ...props
  }: IHorizontalTabsProps) => (
    <Tabs
      // @ts-ignore
      selectedIndex={selectedIndex}
      onSelect={(index) => onSelect(index)}
      selectedTabClassName="text-opacity-100 border-b-4 border-primary-default"
      selectedTabPanelClassName="px-3 md:px-0"
      className={classNames(className)}
      {...props}
    >
      {children}
    </Tabs>
  )
)

// @ts-ignore
HorizontalTabs.tabsRole = 'Tabs'

HorizontalTabs.displayName = 'HorizontalTabs'

export default HorizontalTabs

import { FC, memo, ReactNode } from 'react'
import { TabPanel } from 'react-tabs'

export interface IHorizontalTabsPanelProps {
  children: ReactNode
}

export const HorizontalTabsPanel: FC<IHorizontalTabsPanelProps> = memo(
  ({ children, ...props }: IHorizontalTabsPanelProps) => (
    <TabPanel {...props}>{children}</TabPanel>
  )
)

// @ts-ignore
HorizontalTabsPanel.tabsRole = 'TabPanel'

HorizontalTabsPanel.displayName = 'HorizontalTabsPanel'

export default HorizontalTabsPanel

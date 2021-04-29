import { ReactNode, FC, memo } from 'react'

export interface IFullHeightLayoutProps {
  children?: ReactNode
}

export const FullHeightLayout: FC<IFullHeightLayoutProps> = memo(
  ({ children }: IFullHeightLayoutProps) => (
    <div className="min-h-screen flex flex-col">{children}</div>
  )
)

FullHeightLayout.displayName = 'FullHeightPage'

export default FullHeightLayout

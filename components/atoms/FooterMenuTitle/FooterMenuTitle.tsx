import { FC, ReactNode, memo } from 'react'

export interface IFooterMenuTitleProps {
  children: ReactNode
}

export const FooterMenuTitle: FC<IFooterMenuTitleProps> = memo(
  ({ children }: IFooterMenuTitleProps) => (
    <h2 className="font-bold text-white mb-2 md:font-serif md:font-normal">
      {children}
    </h2>
  )
)

FooterMenuTitle.displayName = 'FooterMenuTitle'

export default FooterMenuTitle

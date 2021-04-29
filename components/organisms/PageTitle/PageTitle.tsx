import { FC, memo, ReactNode } from 'react'
import classNames from 'classnames'

export interface IPageTitleProps {
  children: ReactNode
  theme?: 'dark' | 'light'
  fontSizeClassName?: string
  className?: string
}

export const PageTitle: FC<IPageTitleProps> = memo(
  ({
    children,
    theme = 'light',
    fontSizeClassName = 'text-4xl md:text-7xl',
    className = ''
  }: IPageTitleProps) => (
    <h1
      className={classNames(
        'font-serif font-normal tracking-tighter',
        fontSizeClassName,
        className,
        {
          'text-secondary': theme === 'dark',
          'text-white': theme === 'light'
        }
      )}
    >
      {children}
    </h1>
  )
)

PageTitle.displayName = 'PageTitle'

export default PageTitle

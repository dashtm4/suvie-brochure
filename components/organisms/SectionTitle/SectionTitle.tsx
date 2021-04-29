import { FC, memo, ReactNode } from 'react'
import classNames from 'classnames'

type TAlign = 'left' | 'center' | 'right'
type TTheme = 'dark' | 'light'

export interface ISectionTitleProps {
  children: ReactNode
  level?: 1 | 2 | 3 | 4 | 5 | 6
  theme?: TTheme
  themeMd?: TTheme
  align?: TAlign
  alignMd?: TAlign
  fontSizeClassName?: string
  className?: string
}

export const SectionTitle: FC<ISectionTitleProps> = memo(
  ({
    children,
    level = 2,
    theme = 'light',
    themeMd,
    align = 'center',
    alignMd,
    fontSizeClassName = 'text-2xl md:text-4xl',
    className
  }: ISectionTitleProps) => {
    const TagName = `h${level}` as keyof JSX.IntrinsicElements

    return (
      <TagName
        className={classNames(
          'font-serif font-normal tracking-tighter text-center md:tracking-normal',
          fontSizeClassName,
          className,
          {
            'text-secondary': theme === 'light',
            'text-white': theme === 'dark',
            'md:text-secondary': themeMd === 'light',
            'md:text-white': themeMd === 'dark',
            'text-left': align === 'left',
            'text-center': align === 'center',
            'text-right': align === 'right',
            'md:text-left': alignMd === 'left',
            'md:text-center': alignMd === 'center',
            'md:text-right': alignMd === 'right'
          }
        )}
      >
        {children}
      </TagName>
    )
  }
)

SectionTitle.displayName = 'SectionTitle'

export default SectionTitle

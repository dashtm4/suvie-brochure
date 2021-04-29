import { FC, ReactNode } from 'react'
import classNames from 'classnames'

import { TTheme } from '@temp/types'

export interface ITypographyProps {
  theme?: TTheme
  variant?: string
  className?: string
  level?: string
  children?: ReactNode
}

export const Typography: FC<ITypographyProps> = ({
  theme = 'light',
  variant = 'body',
  className = '',
  level = '',
  children = null
}: ITypographyProps) => {
  const fontSize = (() => {
    switch (variant) {
      case 'title':
        return 'text-4xl md:text-6xl'
      case 'subtitle1':
        return 'text-2xl md:text-3xl'
      case 'subtitle2':
        return 'text-2xl md:text-4xl'
      case 'subtitle3':
        return 'text-lg'
      case 'body':
      default:
        return ''
    }
  })()
  const typographyLevel = (() => {
    if (!level) {
      if (variant === 'subtitle1') {
        return 'h2'
      } else {
        return 'div'
      }
    } else return level
  })()

  const typeface = variant === 'body' ? '' : 'font-serif'
  const fontColor = theme === 'light' ? 'text-secondary' : 'text-white'
  const TagName = `${typographyLevel}` as keyof JSX.IntrinsicElements

  return (
    <TagName className={classNames(typeface, className, fontSize, fontColor)}>
      {children}
    </TagName>
  )
}

Typography.displayName = 'Typography'

export default Typography

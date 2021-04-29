import { FC } from 'react'
import classNames from 'classnames'

import { Typography } from '@components/atoms'
import { Badge } from '@components/organisms'

import { IIntroductionContent } from './types'

export interface IIntroductionProps {
  theme?: 'light' | 'dark'
  content: IIntroductionContent
  className?: string
  children?: any
}

export const Introduction: FC<IIntroductionProps> = ({
  theme = 'light',
  content: { title, content, tag },
  children = null,
  className = ''
}: IIntroductionProps) => {
  return (
    <div className={classNames('grid h-full grid-cols-2 gap-25', className)}>
      <div className="invisible overflow-hidden md:overflow-visible md:visible">
        <div className="mx-auto">
          <Typography theme={theme} variant="title" className="mb-5">
            {title}
          </Typography>
          <Typography theme={theme}>{content}</Typography>
          {tag && (
            <div className="mt-8">
              <Badge theme={theme}>{tag}</Badge>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-center h-full">{children}</div>
    </div>
  )
}

Introduction.displayName = 'Introduction'

export default Introduction

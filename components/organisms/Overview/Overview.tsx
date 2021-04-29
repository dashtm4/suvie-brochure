import { FC, Fragment } from 'react'
import classNames from 'classnames'

import { TTheme } from '@temp/types'
import { Typography } from '@components/atoms'

import { IOverviewContent } from './types'

export interface IOverviewProps {
  theme?: TTheme
  className?: string
  content: IOverviewContent
}

export const Overview: FC<IOverviewProps> = ({
  theme = 'light',
  className = '',
  content: { title, subtitle = [], content = [] }
}: IOverviewProps) => {
  return (
    <div className={classNames('text-center', className)}>
      <Typography theme={theme} variant="subtitle1" className="mb-5">
        <span className="font-normal">{title.pre}</span>{' '}
        <span className="font-medium">{title.bold}</span>
      </Typography>

      <Typography
        theme={theme}
        variant="subtitle2"
        className="mb-5 font-normal"
      >
        {subtitle.map((line: string, lineIndex: number) => (
          <Fragment key={lineIndex}>
            {line}
            <br className="hidden md:block" />{' '}
          </Fragment>
        ))}
      </Typography>

      <Typography theme={theme} className="font-light">
        {content.map((line: string, lineIndex: number) => (
          <Fragment key={lineIndex}>
            {line}
            <br className="hidden md:block" />{' '}
          </Fragment>
        ))}
      </Typography>
    </div>
  )
}

Overview.displayName = 'Overview'

export default Overview

import { FC, ReactNode } from 'react'
import Image from 'next/image'
import classNames from 'classnames'

import { Typography } from '@components/atoms'
import { Badge, Video } from '@components/organisms'
import { TTheme, TDirection } from '@temp/types'

import { IVerticalViewContent } from './types'

export interface IVerticalViewProps {
  theme?: TTheme
  direction?: TDirection
  content: IVerticalViewContent
  className?: string
  children?: ReactNode
}

export const VerticalView: FC<IVerticalViewProps> = ({
  theme = 'light',
  direction = 'normal',
  content: { title = '', content = '', tag = '', src = null, iconSrc = null },
  className = '',
  children = null
}: IVerticalViewProps) => {
  return (
    <div className={className}>
      <div
        className={classNames('h-full flex flex-col text-center md:text-left', {
          'justify-between': direction === 'normal'
        })}
      >
        <div
          className={classNames({
            'mt-5 md:mt-0 mb-9 md:mb-5 order-2 md:order-none':
              direction === 'normal',
            'order-2 mt-5 mb-10 md:mb-0': direction === 'reverse'
          })}
        >
          {iconSrc && (
            <div className="hidden md:block" role="presentation">
              <Image
                width={iconSrc.width}
                height={iconSrc.height}
                src={iconSrc.src}
                alt="kitchen-robot-image"
              />
            </div>
          )}
          {tag && <Badge className="mb-6">{tag}</Badge>}
          <Typography
            theme={theme}
            className="mb-2 md:mb-4"
            variant="subtitle2"
          >
            {title}
          </Typography>
          <Typography theme={theme}>{content}</Typography>
        </div>
        {src && (
          <div className="relative -mx-8 md:mx-0">
            <Video
              className="w-full rounded-none md:rounded-lg h-84 md:h-90"
              src={src}
            />
            <div className="absolute bottom-4 left-4">{children}</div>
          </div>
        )}
      </div>
    </div>
  )
}

VerticalView.displayName = 'VerticalView'

export default VerticalView

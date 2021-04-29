import { FC, ReactNode } from 'react'
import Image from 'next/image'
import classNames from 'classnames'

import { Typography } from '@components/atoms'
import { Video } from '@components/organisms'
import { TTheme, TDirection } from '@temp/types'

import { IHorizontalViewContent } from './types'

export interface IHorizontalViewProps {
  theme?: TTheme
  direction?: TDirection
  content: IHorizontalViewContent
  className?: string
  children?: ReactNode
}

export const HorizontalView: FC<IHorizontalViewProps> = ({
  theme = 'light',
  direction = 'normal',
  content: { title = '', content = '', src = null, iconSrc = null },
  className = '',
  children
}: IHorizontalViewProps) => {
  return (
    <div className={classNames('max-w-screen-lg mx-auto', className)}>
      <div className="flex flex-col items-center justify-center -mx-8 md:mx-0 md:flex-row">
        <div
          className={classNames(
            'px-8 md:px-0 mt-2 md:mt-0 order-1 text-center md:text-left w-full md:w-1/2',
            {
              'md:order-1 md:pl-16': direction === 'reverse',
              'md:order-none md:pr-16': direction === 'normal'
            }
          )}
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

          <Typography
            theme={theme}
            className="mb-2 md:mb-4"
            variant="subtitle2"
          >
            {title}
          </Typography>
          <Typography theme={theme}>{content}</Typography>
          {children}
        </div>
        {src && (
          <div className="w-full -mx-8 md:mx-0 md:w-1/2">
            <Video
              className="w-full rounded-none md:rounded-lg h-84 md:h-70"
              src={src}
            />
          </div>
        )}
      </div>
    </div>
  )
}

HorizontalView.displayName = 'HorizontalView'

export default HorizontalView

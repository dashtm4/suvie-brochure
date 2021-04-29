import { FC } from 'react'
import classNames from 'classnames'
import isEmpty from 'lodash/isEmpty'

import { TTheme, TDirection } from '@temp/types'
import { Badge, VideoPlayer } from '@components/organisms'

export interface IMediaProps {
  theme?: TTheme
  direction?: TDirection
  imageSrc: string
  videoSrc?: string
  tags?: string[]
  className?: string
}

export const Media: FC<IMediaProps> = ({
  theme = 'light',
  direction = 'normal',
  imageSrc,
  videoSrc,
  className = '',
  tags = []
}: IMediaProps) => (
  <figure
    className={classNames(
      'relative overflow-hidden',
      {
        'md:mr-auto': direction === 'normal',
        'md:ml-auto': direction === 'reverse'
      },
      className
    )}
  >
    <VideoPlayer
      url={videoSrc}
      poster={imageSrc}
      autoplay={true}
      controls={false}
      loop={true}
      muted={true}
      playsInline={true}
      className="absolute inset-0 object-cover w-full h-full"
    />

    {!isEmpty(tags) && (
      <div className="absolute left-0 justify-center hidden w-full gap-2 px-4 md:flex bottom-4 md:justify-start">
        {tags.map((tag) => (
          <Badge theme={theme} key={tag}>
            {tag}
          </Badge>
        ))}
      </div>
    )}
  </figure>
)

Media.displayName = 'Media'

export default Media

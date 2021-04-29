import { FC, memo, ReactNode, useRef } from 'react'
import classNames from 'classnames'

import { useToggleVideo } from '@hooks'
import { IVideoSrc } from './types'
import { VideoPlayer } from '../VideoPlayer/VideoPlayer'

export interface IVideoProps {
  src: IVideoSrc
  className?: string
  children?: ReactNode
  autoPlay?: boolean
}

export const Video: FC<IVideoProps> = memo(
  ({
    src = null,
    className = '',
    children = null,
    autoPlay = false
  }: IVideoProps) => {
    const videoRef = useRef<HTMLVideoElement>(null)

    useToggleVideo(videoRef, true)

    return (
      <figure
        className={classNames('relative overflow-hidden', className)}
        onMouseEnter={() => videoRef.current.play()?.catch()}
        onMouseLeave={() => videoRef.current.pause()}
      >
        <VideoPlayer
          playerRef={videoRef}
          url={src?.videoSrc}
          poster={src?.imageSrc}
          autoplay={autoPlay}
          controls={false}
          loop={true}
          muted={true}
          playsInline={true}
          className="absolute inset-0 object-cover w-full h-full"
        />
        <div className="absolute left-0 justify-center hidden w-full px-4 md:flex bottom-4 md:justify-start">
          {children}
        </div>
      </figure>
    )
  }
)

Video.displayName = 'Video'

export default Video

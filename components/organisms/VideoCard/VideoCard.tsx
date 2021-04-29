import { FC, memo, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import classNames from 'classnames'

import { Spinner } from '@components/atoms'
import { VideoPlayer } from '@components/organisms'
import { useToggleVideo, useWindowSize } from '@hooks'

export interface IVideoCardProps {
  posterSrc?: string
  videoSrc?: string
  autoPlay?: boolean
  className?: string
}

export const VideoCard: FC<IVideoCardProps> = memo(
  ({
    posterSrc,
    videoSrc,
    autoPlay = false,
    className = ''
  }: IVideoCardProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const videoRef = useRef<HTMLVideoElement>(null)

    useToggleVideo(videoRef)

    const windowSize = useWindowSize()
    const figureHeight = windowSize.width > 768 ? 450 : 420

    const hideLoader = () => setIsLoading(false)

    useEffect(() => {
      setIsLoading(true)
    }, [posterSrc])

    return (
      <figure
        role="none"
        className={classNames(
          'relative md:rounded md:overflow-hidden',
          className
        )}
        style={{ height: `${figureHeight}px` }}
      >
        {videoSrc ? (
          <VideoPlayer
            playerRef={videoRef}
            url={videoSrc}
            poster={posterSrc}
            autoplay={autoPlay}
            controls={false}
            loop={true}
            muted={true}
            playsInline={true}
            className="object-cover absolute inset-0 w-full h-full"
          />
        ) : (
          <>
            <Image
              src={posterSrc}
              layout="fill"
              objectFit="cover"
              onLoad={hideLoader}
              alt=""
            />

            {isLoading && (
              <div className="flex absolute inset-0 justify-center items-center bg-black">
                <Spinner width={32} height={32} />
              </div>
            )}
          </>
        )}

        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              'linear-gradient(0deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.15) 50%)'
          }}
        />
      </figure>
    )
  }
)

VideoCard.displayName = 'VideoCard'

export default VideoCard

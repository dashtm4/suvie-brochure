import { FC, memo, useRef } from 'react'
import isEmpty from 'lodash/isEmpty'

import { Badge, VideoPlayer, LearnMoreModal } from '@components/organisms'
import { useToggle, useToggleVideo, useWindowSize } from '@hooks'

export interface IMediaCardProps {
  title: string
  description: string
  imageSrc?: string
  videoSrc?: string
  tags?: string[]
}

export const MediaCard: FC<IMediaCardProps> = memo(
  ({ title, description, imageSrc, videoSrc, tags = [] }: IMediaCardProps) => {
    const [showModal, toggleModal] = useToggle(false)

    const videoRef = useRef<HTMLVideoElement>(null)

    useToggleVideo(videoRef)

    const windowSize = useWindowSize()
    const figureHeight = windowSize.width > 768 ? 450 : 420

    return (
      <div className="text-center md:text-left">
        <figure
          className="relative mb-3 md:mb-4"
          style={{ height: `${figureHeight}px` }}
        >
          <div className="h-full overflow-hidden relative md:rounded-lg">
            <VideoPlayer
              playerRef={videoRef}
              url={videoSrc}
              poster={imageSrc}
              autoplay={false}
              controls={false}
              loop={true}
              muted={true}
              playsInline={true}
              className="object-cover absolute inset-0 w-full h-full"
            />
          </div>

          <button
            className="absolute inset-0 w-full h-full"
            style={{
              background:
                'linear-gradient(0deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.15) 50%)'
            }}
            onClick={toggleModal}
          />

          {!isEmpty(tags) && (
            <div className="flex absolute left-0 top-2 gap-2 justify-center px-4 w-full md:justify-start md:top-4">
              {tags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
          )}
        </figure>

        <h3 className="px-3 mb-2 font-serif text-2xl font-medium md:px-0">
          {title}
        </h3>
        <div className="px-3 max-w-sm md:px-0">{description}</div>

        {showModal && (
          <LearnMoreModal
            title={title}
            description={description}
            posterSrc={imageSrc}
            videoSrc={videoSrc}
            toggleModal={toggleModal}
          />
        )}
      </div>
    )
  }
)

MediaCard.displayName = 'MediaCard'

export default MediaCard

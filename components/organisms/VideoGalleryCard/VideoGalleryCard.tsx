import { FC, memo } from 'react'
import classNames from 'classnames'

import { VideoCard } from '@components/organisms'
import { VideoGalleryCardPagination } from '@components/molecules'

export interface IVideoGalleryCardProps {
  videos: string[]
  titles?: string[]
  descriptions?: string[]
  posters?: string[]
  activeVideoIndex: number
  setActiveVideoIndex: (index) => void
  showPagination?: boolean
  className?: string
}

export const VideoGalleryCard: FC<IVideoGalleryCardProps> = memo(
  ({
    videos = [],
    titles = [],
    descriptions = [],
    posters = [],
    activeVideoIndex = 0,
    setActiveVideoIndex,
    showPagination = true,
    className
  }: IVideoGalleryCardProps) => {
    const showCopy =
      titles?.[activeVideoIndex] || descriptions?.[activeVideoIndex]

    return (
      <div className={classNames('relative', className)}>
        <VideoCard
          videoSrc={videos?.[activeVideoIndex]}
          posterSrc={posters?.[activeVideoIndex]}
          autoPlay={true}
        />

        {showCopy && (
          <div className="absolute bottom-0 px-6 pb-6 text-white max-w-md">
            <h3 className="mb-1 font-serif text-2xl font-medium">
              {titles?.[activeVideoIndex]}
            </h3>
            <div>{descriptions?.[activeVideoIndex]}</div>
          </div>
        )}

        {showPagination && (
          <VideoGalleryCardPagination
            length={videos.length}
            activeIndex={activeVideoIndex}
            changeVideo={(index) => setActiveVideoIndex(index)}
            className="absolute bottom-4 left-1/2 z-10 transform -translate-x-1/2"
          />
        )}
      </div>
    )
  }
)

VideoGalleryCard.displayName = 'VideoGalleryCard'

export default VideoGalleryCard

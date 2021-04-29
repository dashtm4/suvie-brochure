import { FC, memo } from 'react'
import classNames from 'classnames'

import { VideoGalleryCardPaginationItem } from '@components/atoms'

export interface IVideoGalleryCardPaginationProps {
  length: number
  activeIndex: number
  changeVideo: (index) => void
  className?: string
}

export const VideoGalleryCardPagination: FC<IVideoGalleryCardPaginationProps> = memo(
  ({
    length,
    activeIndex,
    changeVideo,
    className = ''
  }: IVideoGalleryCardPaginationProps) => (
    <div
      className={classNames(
        'flex justify-center items-center gap-x-2',
        className
      )}
    >
      {[...Array(length)].map((item, index) => (
        <VideoGalleryCardPaginationItem
          key={index}
          index={index}
          isActive={index === activeIndex}
          changeVideo={changeVideo}
        />
      ))}
    </div>
  )
)

VideoGalleryCardPagination.displayName = 'VideoGalleryCardPagination'

export default VideoGalleryCardPagination

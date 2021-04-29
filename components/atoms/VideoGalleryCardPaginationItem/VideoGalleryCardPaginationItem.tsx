import { FC, memo } from 'react'
import classNames from 'classnames'

export interface IVideoGalleryCardPaginationItemProps {
  index: number
  isActive: boolean
  changeVideo: (index: number) => void
}

export const VideoGalleryCardPaginationItem: FC<IVideoGalleryCardPaginationItemProps> = memo(
  ({ index, isActive, changeVideo }: IVideoGalleryCardPaginationItemProps) => (
    <button
      onClick={() => changeVideo(index)}
      className={classNames(
        'flex items-center justify-center border border-white rounded-full text-primary-default transition-all outline-none',
        {
          'opacity-50': !isActive
        }
      )}
      aria-label="presentation"
      style={{ width: '3.125rem', height: '3.125rem' }}
    >
      <span
        className="flex items-center justify-center font-serif text-lg font-normal leading-none bg-white rounded-full"
        style={{ width: '2rem', height: '2rem' }}
      >
        {index + 1}
      </span>
    </button>
  )
)

VideoGalleryCardPaginationItem.displayName = 'VideoGalleryCardPaginationItem'

export default VideoGalleryCardPaginationItem

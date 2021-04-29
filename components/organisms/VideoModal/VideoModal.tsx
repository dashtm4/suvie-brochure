import { FC, memo, MouseEvent, ReactNode } from 'react'
import isEmpty from 'lodash/isEmpty'
import classNames from 'classnames'

import { Modal, VideoPlayer } from '@components/organisms'
import { useWindowSize } from '@hooks'

export interface IVideoModalProps {
  children?: ReactNode
  videoSrc?: string
  posterSrc?: string
  videoAutoPlay?: boolean
  videoControls?: boolean
  videoLoop?: boolean
  videoMuted?: boolean
  toggleModal: (event: MouseEvent<HTMLElement>) => void
  isWidescreenAspectRatio?: boolean
}

export const VideoModal: FC<IVideoModalProps> = memo(
  ({
    children,
    videoSrc,
    posterSrc,
    videoAutoPlay = true,
    videoControls = false,
    videoLoop = true,
    videoMuted = true,
    toggleModal,
    isWidescreenAspectRatio = false
  }: IVideoModalProps) => {
    const windowSize = useWindowSize()

    return (
      <Modal toggleModal={toggleModal}>
        <div
          className={classNames('md:flex', {
            'aspect-w-16 aspect-h-9': isWidescreenAspectRatio
          })}
          style={{
            minHeight:
              windowSize.width > 768 && !isWidescreenAspectRatio
                ? '37rem'
                : 'none'
          }}
        >
          <div
            className={classNames({
              'md:w-full': isEmpty(children),
              'md:w-1/2 md:order-1': !isEmpty(children)
            })}
          >
            <figure
              role="none"
              className="relative w-full overflow-hidden h-60 bg-secondary md:h-full"
            >
              <VideoPlayer
                url={videoSrc}
                poster={posterSrc}
                autoplay={videoAutoPlay}
                controls={videoControls}
                loop={videoLoop}
                muted={videoMuted}
                playsInline={true}
                className="absolute inset-0 object-cover w-full h-full"
                style={{ height: 'calc(100% + 2px)' }} // some videos has small bottom black bar, so we need to use this dirty hack
              />
            </figure>
          </div>

          {children && (
            <div className="px-3 py-8 md:w-1/2 md:py-12 md:pl-8 md:pr-12 md:order-0 md:flex md:flex-col md:justify-center">
              {children}
            </div>
          )}
        </div>
      </Modal>
    )
  }
)

VideoModal.displayName = 'VideoModal'

export default VideoModal

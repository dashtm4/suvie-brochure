import { FC, memo, useRef, useEffect } from 'react'
import Image from 'next/image'
import isEmpty from 'lodash/isEmpty'

import { Badge, VideoPlayer, LearnMoreModal } from '@components/organisms'
import { useToggle } from '@hooks'

export interface ILearnMoreCardProps {
  title: string
  shortDescription: string
  posterSrc?: string
  videoSrc?: string
  description?: string
  tags?: string[]
  className?: string
  playVideo?: boolean
}

export const LearnMoreCard: FC<ILearnMoreCardProps> = memo(
  ({
    title,
    shortDescription,
    posterSrc,
    videoSrc,
    description,
    tags,
    className = '',
    playVideo = false
  }: ILearnMoreCardProps) => {
    const videoRef = useRef<HTMLVideoElement>(null)

    const [showModal, toggleModal] = useToggle(false)

    useEffect(() => {
      if (playVideo) {
        videoRef.current?.play()?.catch()
      } else {
        videoRef.current?.pause()
      }
    }, [playVideo])

    return (
      <>
        <div className={`text-center w-50 max-w-full ${className}`}>
          <figure
            className="relative mb-4 overflow-hidden rounded w-50 h-50"
            style={{
              boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.15)'
            }}
          >
            <VideoPlayer
              playerRef={videoRef}
              url={videoSrc}
              poster={posterSrc}
              autoplay={false}
              controls={false}
              loop={true}
              muted={true}
              playsInline={true}
              className="absolute inset-0 object-cover w-full h-full"
              style={{ height: 'calc(100% + 1px)' }} // some videos has small bottom black bar, so we need to use this dirty hack
            />
            <button
              className="absolute inset-0 flex flex-col items-center justify-center w-full transition-all rounded opacity-0 cursor-pointer hover:opacity-100"
              style={{
                background:
                  'linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)'
              }}
              role="presentation"
              onClick={toggleModal}
              onMouseEnter={() => videoRef.current.play()?.catch()}
              onMouseLeave={() => videoRef.current.pause()}
            >
              <Image
                width="31"
                height="38"
                src="/images/fire-icon.svg"
                alt=""
              />
              <div className="mt-2 font-bold tracking-widest text-white uppercase">
                Learn more
              </div>
            </button>

            {!isEmpty(tags) && (
              <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 px-2 pb-2">
                {tags.map((tag) => (
                  <Badge key={tag} className="text-xs leading-none">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </figure>

          <h3 className="mb-3 font-serif text-lg font-normal text-secondary">
            {title}
          </h3>

          <div className="font-serif text-sm text-septenary">
            {shortDescription}
          </div>
        </div>

        {showModal && (
          <LearnMoreModal
            title={title}
            description={!isEmpty(description) ? description : shortDescription}
            posterSrc={posterSrc}
            videoSrc={videoSrc}
            toggleModal={toggleModal}
          />
        )}
      </>
    )
  }
)

LearnMoreCard.displayName = 'LearnMoreCard'

export default LearnMoreCard

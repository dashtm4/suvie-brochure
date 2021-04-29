import { FC, memo, useRef } from 'react'
import Image from 'next/image'

import { Container } from '@components/containers'
import {
  Badge,
  PageTitle,
  VideoModal,
  VideoPlayer
} from '@components/organisms'
import { useWindowSize, useToggleVideo, useToggle } from '@hooks'

import {
  BACKGROUND_POSTER_SRC,
  BACKGROUND_VIDEO_SRC,
  MODAL_VIDEO_SRC
} from './constants'

export interface IHomeHeroSectionProps {}

export const HomeHeroSection: FC<IHomeHeroSectionProps> = memo(() => {
  const windowSize = useWindowSize()

  const [showModal, toggleModal] = useToggle(false)

  const videoRef = useRef<HTMLVideoElement>(null)

  useToggleVideo(videoRef)

  return (
    <section className="relative pt-12 pb-20 text-center bg-center bg-no-repeat bg-cover bg-secondary md:text-left md:pt-28 md:pb-27">
      <figure
        role="none"
        className="absolute inset-0 z-0"
        style={{
          background: `url(${BACKGROUND_POSTER_SRC}) 78% 50%/cover no-repeat`
        }}
      >
        <VideoPlayer
          playerRef={videoRef}
          url={BACKGROUND_VIDEO_SRC}
          autoplay={false}
          controls={false}
          loop={true}
          playsInline={true}
          muted={true}
          className="absolute inset-0 object-cover w-full h-full"
        />
      </figure>

      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            windowSize.width > 768
              ? 'radial-gradient(84% 108% at 24% 55%, rgba(38, 38, 38, .6) 0%, rgba(38, 38, 38, 0) 60%)'
              : 'linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 58%)'
        }}
      />

      <Container className="relative">
        <div
          role="banner"
          className="md:flex md:flex-col md:items-start"
          style={{ maxWidth: '36.5rem' }}
        >
          <Badge className="mb-3 md:order-0">New 2nd Generation Suvie</Badge>

          <PageTitle
            fontSizeClassName="text-5xl md:text-7xl"
            className="mb-60 md:mb-5 md:order-1"
          >
            Your countertop kitchen robot
          </PageTitle>

          <div className="mb-4 text-lg font-normal text-white md:order-3 md:max-w-xs">
            Created to help you save time and eat well, the new Suvie makes life
            easier.
          </div>

          <button
            className="inline-flex items-center justify-center text-sm font-bold tracking-widest text-white uppercase focus:outline-none focus:text-primary-dark md:order-2 hover:text-primary-default md:mb-7"
            role="presentation"
            onClick={toggleModal}
          >
            <span className="mr-3" aria-label="presentation">
              Watch video
            </span>
            <Image
              width="50"
              height="50"
              src="/images/home-page/play-icon.svg"
              alt=""
            />
          </button>
        </div>
      </Container>

      {showModal && (
        <VideoModal
          videoSrc={MODAL_VIDEO_SRC}
          videoControls={true}
          videoLoop={false}
          videoMuted={false}
          toggleModal={toggleModal}
          isWidescreenAspectRatio={true}
        />
      )}
    </section>
  )
})

HomeHeroSection.displayName = 'HomeHeroSection'

export default HomeHeroSection

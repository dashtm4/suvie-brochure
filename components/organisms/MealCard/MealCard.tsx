import { FC, memo, useEffect, useMemo, useRef } from 'react'
import Image from 'next/image'
import isEmpty from 'lodash/isEmpty'
import classNames from 'classnames'

import { VideoPlayer, MealModal } from '@components/organisms'
import { useToggle, useWindowSize } from '@hooks'
import { IMeal } from '@temp/types'

export interface IMealCardProps {
  meal: IMeal
  showTags?: boolean
  showPlateImage?: boolean
  className?: string
  playVideo?: boolean
  showCTAButton?: boolean
}

export const MealCard: FC<IMealCardProps> = memo(
  ({
    meal,
    showTags = true,
    showPlateImage = false,
    className = '',
    playVideo = false,
    showCTAButton = false
  }: IMealCardProps) => {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
      if (playVideo) {
        videoRef.current?.play()?.catch()
      } else {
        videoRef.current?.pause()
      }
    }, [playVideo])

    const windowSize = useWindowSize()
    const mealImageSize = windowSize.width > 768 ? 150 : 112

    const [showModal, toggleModal] = useToggle(false)

    const isShowPlateImage = showPlateImage && !isEmpty(meal?.plateImageSrc)

    const isSmartMeal = meal?.type === 'smart meals'

    const badgeStyle = useMemo(
      () => ({
        backgroundColor: isSmartMeal ? '#424242' : '#d0A86e'
      }),
      [meal?.type]
    )

    return (
      <div
        data-id={meal?.id}
        className={classNames('relative w-60 max-w-full md:w-80', className)}
      >
        <figure
          role="none"
          className="relative max-w-full overflow-hidden rounded-lg shadow-md w-60 bg-secondary md:w-80 aspect-w-1 aspect-h-1"
        >
          <VideoPlayer
            playerRef={videoRef}
            url={meal?.videoSrc}
            poster={meal?.imageSrc}
            autoplay={false}
            controls={false}
            loop={true}
            muted={true}
            playsInline={true}
            className="absolute inset-0 object-cover w-full h-full rounded-lg"
          />
          <div
            className="absolute inset-0 w-full h-full rounded-lg"
            style={{
              background:
                'linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%)'
            }}
          />
          <button
            className="absolute inset-0 z-10 flex flex-col items-center justify-center w-full transition-all opacity-0 cursor-pointer md:hover:opacity-100"
            role="presentation"
            onClick={toggleModal}
          >
            <Image
              width="28"
              height="28"
              src="/images/square-plus-icon.svg"
              alt=""
            />
            <div className="mt-2 font-bold tracking-widest text-white uppercase">
              Learn more
            </div>
          </button>

          {showTags && !isEmpty(meal?.categories) && (
            <div className="absolute left-0 bottom-auto flex flex-wrap justify-center w-full h-auto gap-1 px-4 top-4">
              {meal?.categories?.map((category) => (
                <div
                  key={category}
                  className="px-2 py-1 mx-1 text-xs font-bold tracking-widest text-center text-white uppercase border border-white rounded-lg md:py-2 md:px-4"
                >
                  {category}
                </div>
              ))}
            </div>
          )}
        </figure>

        <div
          className={classNames('flex flex-col items-center  text-center', {
            '-mt-11 md:-mt-15': isShowPlateImage
          })}
        >
          <div
            className={classNames('relative mb-2', {
              'mt-3': !isShowPlateImage
            })}
            role="presentation"
          >
            {isShowPlateImage && (
              <Image
                width={mealImageSize}
                height={mealImageSize}
                src={meal?.plateImageSrc}
                alt={meal?.title}
              />
            )}

            <div
              className={classNames(
                'py-2 px-4 font-bold tracking-widest text-center text-white uppercase whitespace-nowrap rounded-lg text-xs',
                {
                  'absolute bottom-0 left-1/2 transform -translate-x-1/2': isShowPlateImage
                }
              )}
              style={badgeStyle}
            >
              {meal?.type}
            </div>
          </div>

          <h3 className="mb-1 font-serif text-2xl font-normal text-secondary">
            {meal?.title}
          </h3>
          <div className="max-w-full text-gray-700 w-54">{meal?.subtitle}</div>
        </div>
        {showModal && (
          <MealModal
            meal={meal}
            toggleModal={toggleModal}
            showCTAButton={showCTAButton}
          />
        )}
      </div>
    )
  }
)

MealCard.displayName = 'MealCard'

export default MealCard

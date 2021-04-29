import { FC, ReactNode } from 'react'
import Image from 'next/image'
import classNames from 'classnames'

import { Typography, Wave } from '@components/atoms'
import {
  Overview,
  Introduction,
  Video,
  HorizontalView,
  ResponsiveSegment,
  Badge
} from '@components/organisms'
import { Layout } from '@components/containers'

import {
  STARCH_COOKER_OVERVIEW,
  STARCH_COOKER_TAG,
  STARCH_COOKER_INTRO,
  STARCH_COOKER_H
} from './constants'
import styles from './KitchenRobotFifthSection.module.scss'

export interface IKitchenRobotFifthSectionProps {}

export const KitchenRobotFifthSection: FC<IKitchenRobotFifthSectionProps> = () => {
  const segment: ReactNode[] = [
    <HorizontalView
      key="1"
      direction="reverse"
      className="md:mb-18"
      content={STARCH_COOKER_H[0]}
    />,
    <HorizontalView
      key="2"
      className="md:mb-18"
      content={STARCH_COOKER_H[1]}
    />,
    <HorizontalView key="3" direction="reverse" content={STARCH_COOKER_H[2]} />
  ]
  return (
    <section
      className={classNames(
        'relative bg-yellow pt-15 md:pt-23 pb-18 md:pb-40',
        styles['kitchen-robot-fifth-section']
      )}
    >
      <Wave colorName="yellow" />

      <div className={classNames('text-center md:pb-5', styles.overview)}>
        <Layout>
          <div className="inline-block relative" role="presentation">
            <Image
              width={STARCH_COOKER_OVERVIEW.image.width}
              height={STARCH_COOKER_OVERVIEW.image.height}
              src={STARCH_COOKER_OVERVIEW.image.src}
              alt="kitchen-robot-image"
            />
          </div>
        </Layout>
      </div>

      <div className="text-center" role="presentation">
        <Image
          width={STARCH_COOKER_TAG.width}
          height={STARCH_COOKER_TAG.height}
          src={STARCH_COOKER_TAG.src}
          alt="overview-tag"
        />
      </div>
      <Layout>
        <Overview
          className={classNames('mb-0')}
          content={STARCH_COOKER_OVERVIEW.main}
        />
      </Layout>
      <div className="mb-8 text-center">
        <Badge
          theme="light--transparent"
          className="hidden mt-8 md:inline-block"
        >
          ADD-ON
        </Badge>
      </div>

      <div className="relative mb-9 h-80 md:h-160 md:mb-0">
        <div className="absolute inset-0">
          <Video className="h-full" src={STARCH_COOKER_INTRO.bgMedia} />
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background:
                'radial-gradient(225.12% 114.69% at 50% -14.69%, #FFEAC6 27.73%, rgba(255, 234, 198, 0) 68.99%)'
            }}
          />
        </div>
        <div className={classNames('relative h-full', styles.intro)}>
          <Layout>
            <Introduction
              theme="dark"
              className="md:pt-50"
              content={STARCH_COOKER_INTRO.main}
            />
          </Layout>
        </div>
      </div>

      <Layout>
        <div className="mb-11 text-center md:hidden">
          <Typography variant="title" className="mb-3">
            {STARCH_COOKER_INTRO.main.title}
          </Typography>
          <Typography>{STARCH_COOKER_INTRO.main.content}</Typography>
        </div>
      </Layout>

      <div className="relative md:pt-17">
        <Wave colorName="yellow" />

        <ResponsiveSegment segment={segment} />
      </div>

      <Wave
        colorName="white"
        position="bottom-revert"
        className="hidden md:block"
      />
    </section>
  )
}

KitchenRobotFifthSection.displayName = 'KitchenRobotFifthSection'

export default KitchenRobotFifthSection

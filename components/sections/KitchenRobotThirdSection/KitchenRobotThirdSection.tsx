import { FC, ReactNode } from 'react'
import Image from 'next/image'
import classNames from 'classnames'

import { Wave, Typography } from '@components/atoms'
import {
  Overview,
  HorizontalView,
  Introduction,
  VerticalView,
  Video,
  ResponsiveSegment
} from '@components/organisms'
import { Layout } from '@components/containers'

import styles from './KitchenRobotThirdSection.module.scss'
import {
  KITCHEN_ROBOT_OVERVIEW,
  KITCHEN_ROBOT_INTRO,
  KITCHEN_ROBOT_TAG,
  HOW_IT_WORKS_1V,
  HOW_IT_WORKS_1H,
  HOW_IT_WORKS_2V
} from './constants'

export interface IKitchenRobotThirdSectionProps {}

export const KitchenRobotThirdSection: FC<IKitchenRobotThirdSectionProps> = () => {
  const segment1: ReactNode[] = [
    <VerticalView
      key="1"
      theme="dark"
      className="pr-0 md:pr-12 md:w-1/2 md:mb-28"
      content={HOW_IT_WORKS_1V[0]}
    />,
    <VerticalView
      key="2"
      theme="dark"
      className="pl-0 md:pl-12 md:w-1/2 md:mb-28"
      content={HOW_IT_WORKS_1V[1]}
    />,
    <HorizontalView
      theme="dark"
      key="3"
      className="md:mb-39"
      content={HOW_IT_WORKS_1H}
    />
  ]

  const segment2: ReactNode[] = [
    <VerticalView
      theme="dark"
      key="1"
      direction="reverse"
      className="pr-0 md:pr-3 md:w-1/3"
      content={HOW_IT_WORKS_2V[0]}
    />,
    <VerticalView
      theme="dark"
      key="2"
      direction="reverse"
      className="px-0 md:px-3 md:w-1/3"
      content={HOW_IT_WORKS_2V[1]}
    />,
    <VerticalView
      theme="dark"
      key="3"
      direction="reverse"
      className="pl-0 md:pl-3 md:w-1/3"
      content={HOW_IT_WORKS_2V[2]}
    />
  ]

  return (
    <section
      className={classNames(
        'relative pb-7 md:pb-29 bg-brown',
        styles['kitchen-robot-third-section']
      )}
    >
      <Wave colorName="brown" />

      <div
        className={classNames(
          'text-center mt-16 md:mt-20 pb-6 md:pb-7',
          styles.overview
        )}
      >
        <Layout>
          <div className="inline-block relative" role="presentation">
            <Image
              width={KITCHEN_ROBOT_OVERVIEW.image.width}
              height={KITCHEN_ROBOT_OVERVIEW.image.height}
              src={KITCHEN_ROBOT_OVERVIEW.image.src}
              alt="kitchen-robot-image"
            />
          </div>
        </Layout>
      </div>

      <div className="mb-2 text-center" role="presentation">
        <Image
          width={KITCHEN_ROBOT_TAG.width}
          height={KITCHEN_ROBOT_TAG.height}
          src={KITCHEN_ROBOT_TAG.src}
          alt="overview-tag"
        />
      </div>

      <Layout>
        <Overview
          theme="dark"
          className={classNames('mb-10 md:mb-22')}
          content={KITCHEN_ROBOT_OVERVIEW.main}
        />
      </Layout>

      <div className="relative mb-3 h-80 md:h-160 md:mb-18">
        <div className="absolute inset-0">
          <Video
            className="h-full"
            src={KITCHEN_ROBOT_INTRO.bgMedia}
            autoPlay={true}
          />
        </div>
        <div className={classNames('relative h-full', styles.intro)}>
          <Layout>
            <Introduction
              theme="dark"
              className="pt-0 md:pt-38"
              content={KITCHEN_ROBOT_INTRO.main}
            >
              <div className="hidden md:block" role="presentation">
                <Image
                  width={150}
                  height={150}
                  src="/images/kitchen-robot/auto-cook--seal.svg"
                  alt=""
                />
              </div>
            </Introduction>
          </Layout>
        </div>
      </div>

      <Layout>
        <div className="mb-8 text-center md:hidden">
          <Typography theme="dark" variant="title" className="mb-3">
            {KITCHEN_ROBOT_INTRO.main.title}
          </Typography>
          <Typography theme="dark">
            {KITCHEN_ROBOT_INTRO.main.content}
          </Typography>
        </div>
      </Layout>

      <div className="mb-20 md:mb-0">
        <ResponsiveSegment theme="dark" segment={segment1} />
      </div>

      <Layout>
        <Typography
          theme="dark"
          variant="title"
          className="mb-8 text-center md:mb-14"
        >
          No preheat needed.
        </Typography>
      </Layout>

      <div className="mb-20 md:mb-0">
        <ResponsiveSegment theme="dark" segment={segment2} />
      </div>

      <Wave position="bottom" colorHex="#1a100f" className="z-10" />
    </section>
  )
}

KitchenRobotThirdSection.displayName = 'KitchenRobotThirdSection'

export default KitchenRobotThirdSection

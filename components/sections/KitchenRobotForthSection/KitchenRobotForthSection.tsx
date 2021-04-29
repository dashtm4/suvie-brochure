import { FC, ReactNode } from 'react'
import Image from 'next/image'
import classNames from 'classnames'

import { Typography } from '@components/atoms'
import {
  HorizontalView,
  Introduction,
  VerticalView,
  Video,
  ResponsiveSegment,
  Badge
} from '@components/organisms'
import { Layout } from '@components/containers'

import {
  PRECISION_COOKING_INTRO,
  PRECISION_COOKING_1V,
  PRECISION_COOKING_1H,
  PRECISION_COOKING_2H
} from './constants'
import styles from './KitchenRobotForthSection.module.scss'

export interface IKitchenRobotForthSectionProps {}

export const KitchenRobotForthSection: FC<IKitchenRobotForthSectionProps> = () => {
  const segment1: ReactNode[] = [
    <VerticalView
      key="1"
      className="pr-0 md:pr-12 md:w-1/2 md:mb-24"
      content={PRECISION_COOKING_1V[0]}
    />,
    <VerticalView
      key="2"
      className="pl-0 md:pl-12 md:w-1/2 md:mb-24"
      content={PRECISION_COOKING_1V[1]}
    />,
    <HorizontalView
      key="3"
      className="md:mb-24"
      content={PRECISION_COOKING_1H}
    />
  ]

  const segment2: ReactNode[] = [
    <HorizontalView
      key="1"
      direction="reverse"
      className="md:mb-21"
      content={PRECISION_COOKING_2H[0]}
    >
      <Badge theme="light--transparent" className="hidden mt-8 md:inline-block">
        ADD-ON
      </Badge>
    </HorizontalView>,
    <HorizontalView key="2" content={PRECISION_COOKING_2H[1]} />
  ]

  return (
    <section
      className={classNames(
        'md:pb-36 bg-gray-150 pb-18',
        styles['kitchen-robot-forth-section']
      )}
    >
      <div className="relative mb-9 h-80 md:h-160 md:mb-18">
        <div className="absolute inset-0">
          <Video className="h-full" src={PRECISION_COOKING_INTRO.bgMedia} />
        </div>
        <div className={classNames('relative h-full', styles.intro)}>
          <Layout>
            <Introduction
              theme="dark"
              className="pt-0 md:pt-53"
              content={PRECISION_COOKING_INTRO.main}
            >
              <div className="hidden md:block" role="presentation">
                <Image
                  width={150}
                  height={150}
                  src="/images/kitchen-robot/precision-cooking--seal.svg"
                  alt=""
                />
              </div>
            </Introduction>
          </Layout>
        </div>
      </div>

      <Layout>
        <div className="mb-10 text-center md:hidden">
          <Typography variant="title" className="mb-3">
            {PRECISION_COOKING_INTRO.main.title}
          </Typography>
          <Typography>{PRECISION_COOKING_INTRO.main.content}</Typography>
        </div>
      </Layout>

      <div className="mb-20 md:mb-0">
        <ResponsiveSegment segment={segment1} />
      </div>

      <Layout>
        <Typography variant="title" className="mb-8 text-center md:mb-14">
          And do more.
        </Typography>
      </Layout>

      <ResponsiveSegment segment={segment2} />
    </section>
  )
}

KitchenRobotForthSection.displayName = 'KitchenRobotForthSection'

export default KitchenRobotForthSection

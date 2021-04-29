import { FC, Fragment } from 'react'
import classNames from 'classnames'

import { Typography } from '@components/atoms'
import { KitchenRobotHeroSideSection } from '@components/sections'
import { Layout } from '@components/containers'
import { OVERVIEW_TITLE, SUVIE_ITEMS } from './constants'
import styles from './KitchenRobotHeroSection.module.scss'

export interface IKitchenRobotHeroSectionProps {}

export const KitchenRobotHeroSection: FC<IKitchenRobotHeroSectionProps> = () => {
  return (
    <section
      className={classNames(
        'pt-11 pb-6 md:pt-24 md:pb-33',
        styles['kitchen-robot-hero-section']
      )}
    >
      <Layout>
        <Typography
          theme="dark"
          variant="title"
          level="h1"
          className="font-normal text-center mb-54 md:mb-24"
        >
          {OVERVIEW_TITLE.map((title: string, index: number) => (
            <Fragment key={index}>
              {title} <br />
            </Fragment>
          ))}
        </Typography>

        <div className="flex flex-col md:flex-row md:gap-100">
          <KitchenRobotHeroSideSection
            className="order-1 md:text-right"
            item={SUVIE_ITEMS.kitchenRobot}
          />

          <KitchenRobotHeroSideSection
            className="order-2 md:text-left "
            item={SUVIE_ITEMS.starchCooker}
          />
        </div>
      </Layout>
    </section>
  )
}

KitchenRobotHeroSection.displayName = 'KitchenRobotHeroSection'

export default KitchenRobotHeroSection

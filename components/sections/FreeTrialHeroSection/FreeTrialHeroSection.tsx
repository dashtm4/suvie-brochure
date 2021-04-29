import { FC, memo } from 'react'
import classNames from 'classnames'

import { Layout } from '@components/containers'

import { OVERVIEW, MOBILE_VERSION_OVERVIEW } from './constants'
import styles from './FreeTrialHeroSection.module.scss'

export interface IFreeTrialHeroSectionProps {}

export const FreeTrialHeroSection: FC<IFreeTrialHeroSectionProps> = memo(() => {
  return (
    <section
      className={classNames('h-73 md:h-88', styles['free-trial-hero-section'])}
    >
      <Layout className="flex items-center justify-center">
        <h1 className="font-serif text-4xl font-normal text-white md:text-7xl">
          <span className="hidden md:block">{OVERVIEW}</span>
          <span className="md:hidden">{MOBILE_VERSION_OVERVIEW}</span>
        </h1>
      </Layout>
    </section>
  )
})

FreeTrialHeroSection.displayName = 'FreeTrialHeroSection'

export default FreeTrialHeroSection

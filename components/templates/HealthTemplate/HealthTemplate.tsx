import { FC, memo } from 'react'

import { DefaultHero, FeaturesBanner } from '@components/organisms'
import {
  HealthSecondSection,
  HealthThirdSection,
  FinalCallToActionSection
} from '@components/sections'

import bannerFeatures from '@temp/static/banner-features.json'

export interface IHealthTemplateProps {}

export const HealthTemplate: FC<IHealthTemplateProps> = memo(() => (
  <main>
    <FeaturesBanner features={bannerFeatures} />
    <DefaultHero
      title="Health"
      imageSrc="/images/health-page/hero-background.jpg"
    />
    <HealthSecondSection />
    <HealthThirdSection />
    <FinalCallToActionSection
      imageSrc="/images/health-page/final-call-to-action-section-background.jpg"
      offsetXInMobile="center"
      offsetX="left"
    />
  </main>
))

HealthTemplate.displayName = 'HealthTemplate'

export default HealthTemplate

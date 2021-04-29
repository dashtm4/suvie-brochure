import { FC, memo } from 'react'

import { DefaultHero, FeaturesBanner } from '@components/organisms'
import {
  FreeTrialSecondSection,
  FreeTrialHowItWorksSection,
  FreeTrialGetInTouchSection,
  FreeTrialFaqSection,
  FinalCallToActionSection
} from '@components/sections'

import bannerFeatures from '@temp/static/banner-features.json'

export interface IFreeTrialTemplateProps {}

export const FreeTrialTemplate: FC<IFreeTrialTemplateProps> = memo(() => (
  <main>
    <FeaturesBanner features={bannerFeatures} />
    <DefaultHero
      title="Try Suvie risk-free"
      bgPosition="bottom"
      imageSrc="/images/free-trial-page/hero-background.jpg"
    />
    <FreeTrialSecondSection />
    <FreeTrialHowItWorksSection />
    <FreeTrialGetInTouchSection />
    <FreeTrialFaqSection />
    <FinalCallToActionSection imageSrc="/images/free-trial-page/final-call-to-action-section-background.jpg" />
  </main>
))

FreeTrialTemplate.displayName = 'FreeTrialTemplate'

export default FreeTrialTemplate

import { FC, memo, useRef } from 'react'

import { DefaultHero, FeaturesBanner } from '@components/organisms'
import {
  SmartMealsSecondSection,
  SmartMealsThirdSection,
  SmartMealsForthSection,
  SmartMealsFifthSection,
  FinalCallToActionSection
} from '@components/sections'

import bannerFeatures from '@temp/static/banner-features.json'

export interface ISmartMealsTemplateProps {}

export const SmartMealsTemplate: FC<ISmartMealsTemplateProps> = memo(() => {
  const mealsListRef = useRef<HTMLDivElement>(null)

  return (
    <main>
      <FeaturesBanner features={bannerFeatures} />
      <DefaultHero
        title="Smart Meals"
        imageSrc="/images/smart-meals-page/smart-meals-hero-background.jpg"
        mobileImageSrc="/images/smart-meals-page/smart-meals-hero-background--small.jpg"
      />
      <SmartMealsSecondSection />
      <SmartMealsThirdSection mealsListRef={mealsListRef} />
      <SmartMealsForthSection mealsListRef={mealsListRef} />
      <SmartMealsFifthSection />
      <FinalCallToActionSection
        imageSrc="/images/smart-meals-page/final-call-to-action-section-background.jpg"
        offsetXInMobile="center"
        offsetX="left"
      />
    </main>
  )
})

SmartMealsTemplate.displayName = 'SmartMealsTemplate'

export default SmartMealsTemplate

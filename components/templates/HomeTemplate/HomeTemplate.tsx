import { FC, memo } from 'react'
import { useQuery } from '@apollo/client'

import { FeaturesBanner } from '@components/organisms'
import {
  HomeHeroSection,
  HomeSealsSection,
  HomeExploreKitchenRobotSection,
  HomeSaveUpTimeSection,
  HomeKitchenRobotFunctionsSection,
  HomeStarchCookerFunctionsSection,
  HomeMealsSection,
  HomeExplorePlansAndHealthSection,
  HomeCallToActionSection,
  HomeCleanUpSection,
  HomeSliderSection,
  ReviewsSection,
  FinalCallToActionSection
} from '@components/sections'
import { HOME_PAGE_QUERY } from '@queries'

import bannerFeatures from '@temp/static/banner-features.json'

export interface IHomeTemplateProps {}

export const HomeTemplate: FC<IHomeTemplateProps> = memo(() => {
  const queryResult = useQuery(HOME_PAGE_QUERY)
  const reviews = queryResult?.data?.home_page?.reviews_list?.reviews ?? []

  return (
    <main>
      <FeaturesBanner features={bannerFeatures} />
      <HomeHeroSection />
      <HomeSealsSection />
      <HomeExploreKitchenRobotSection />
      <HomeSaveUpTimeSection />
      <HomeKitchenRobotFunctionsSection />
      <HomeStarchCookerFunctionsSection />
      <HomeMealsSection />
      <HomeExplorePlansAndHealthSection />
      <HomeCallToActionSection />
      <HomeCleanUpSection />
      <HomeSliderSection />
      <ReviewsSection reviews={reviews} />
      <FinalCallToActionSection offsetX="70%" offsetXInMobile="center" />
    </main>
  )
})

HomeTemplate.displayName = 'HomeTemplate'

export default HomeTemplate

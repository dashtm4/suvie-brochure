import { FC, memo } from 'react'

import { FeaturesBanner, RobotTechnicalSpecs } from '@components/organisms'
import {
  ShopFirstSection,
  ShopSecondSection,
  ShopThirdSection,
  ShopFifthSection,
  ShopSixthSection
} from '@components/sections'

import bannerFeatures from '@temp/static/banner-features.json'

export interface IShopTemplateProps {}

export const ShopTemplate: FC<IShopTemplateProps> = memo(() => (
  <main>
    <FeaturesBanner features={bannerFeatures} />
    <ShopFirstSection />
    <ShopSecondSection />
    <ShopThirdSection />
    <RobotTechnicalSpecs className="pt-20 bg-quaternary pb-11 md:pb-15" />
    <ShopFifthSection />
    <ShopSixthSection />
  </main>
))

ShopTemplate.displayName = 'ShopTemplate'

export default ShopTemplate

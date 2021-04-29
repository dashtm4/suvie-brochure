import { FC, memo } from 'react'

import { FeaturesBanner, DefaultHero } from '@components/organisms'
import {
  RecipesYourChoiceSection,
  RecipesSection,
  RecipesFaqSection,
  RecipesReviewsSection,
  FinalCallToActionSection
} from '@components/sections'

import bannerFeatures from '@temp/static/banner-features.json'

export interface IRecipesTemplateProps {}

export const RecipesTemplate: FC<IRecipesTemplateProps> = memo(() => (
  <main>
    <FeaturesBanner features={bannerFeatures} />
    <DefaultHero
      title="Recipes"
      imageSrc="/images/recipes-page/what-you-cook-hero-background.jpg"
    />
    <RecipesYourChoiceSection />
    <RecipesSection />
    <RecipesFaqSection />
    <RecipesReviewsSection />
    <FinalCallToActionSection
      imageSrc="/images/recipes-page/final-call-to-action-section-background.jpg"
      offsetXInMobile="center"
      offsetX="left"
    />
  </main>
))

RecipesTemplate.displayName = 'RecipesTemplate'

export default RecipesTemplate

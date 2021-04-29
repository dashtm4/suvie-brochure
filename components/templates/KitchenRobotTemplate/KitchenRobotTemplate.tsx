import { FC } from 'react'

import { RobotTechnicalSpecs } from '@components/organisms'
import {
  KitchenRobotHeroSection,
  KitchenRobotSecondSection,
  KitchenRobotThirdSection,
  KitchenRobotForthSection,
  KitchenRobotFifthSection,
  ReviewsSection,
  FinalCallToActionSection
} from '@components/sections'
import { useQuery } from '@apollo/client'
import { KITCHEN_ROBOT_PAGE_QUERY } from '@queries'

export interface IKitchenRobotTemplateProps {}

export const KitchenRobotTemplate: FC<IKitchenRobotTemplateProps> = () => {
  const queryResult = useQuery(KITCHEN_ROBOT_PAGE_QUERY)
  const reviews =
    queryResult?.data?.kitchen_robot_page?.reviews_list?.reviews ?? []

  return (
    <main>
      <KitchenRobotHeroSection />
      <KitchenRobotSecondSection />
      <KitchenRobotThirdSection />
      <KitchenRobotForthSection />
      <KitchenRobotFifthSection />
      <RobotTechnicalSpecs className="pt-12 pb-20 bg-white md:pb-23" />
      <ReviewsSection reviews={reviews} />
      <FinalCallToActionSection
        offsetXInMobile="center"
        imageSrc="/images/kitchen-robot/final-call-to-action-section--bg.jpg"
      />
    </main>
  )
}

KitchenRobotTemplate.displayName = 'KitchenRobotTemplate'

export default KitchenRobotTemplate

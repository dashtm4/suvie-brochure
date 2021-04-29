import { FC, memo } from 'react'

import { AboutUsSection, FinalCallToActionSection } from '@components/sections'

export interface IAboutUsTemplateProps {}

export const AboutUsTemplate: FC<IAboutUsTemplateProps> = memo(() => {
  return (
    <>
      <AboutUsSection />
      <FinalCallToActionSection
        offsetXInMobile="center"
        offsetYInMobile="center"
        imageSrc="/images/about-us/final-call-to-action-section--bg.jpg"
      />
    </>
  )
})

AboutUsTemplate.displayName = 'AboutUsTemplate'

export default AboutUsTemplate

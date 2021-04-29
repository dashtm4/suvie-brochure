import { FC, memo } from 'react'

import { SectionTitle } from '@components/organisms'

import { TITLE, SUBTITLE } from './constants'
import { ButtonLink } from '@components/atoms'

export interface IFreeTrialGetInTouchSectionProps {}

export const FreeTrialGetInTouchSection: FC<IFreeTrialGetInTouchSectionProps> = memo(
  () => (
    <section className="pt-8 pb-10 text-center md:pt-32 md:pb-17">
      <SectionTitle fontSizeClassName="text-3.5xl md:text-4xl" className="mb-4">
        {TITLE}
      </SectionTitle>

      <div className="mb-4 md:text-secondary md:text-lg">{SUBTITLE}</div>

      <ButtonLink
        href="https://support.suvie.com/hc/en-us/requests/new"
        className="max-w-full w-50"
        isExternal={true}
        target="_blank"
      >
        Get in Touch
      </ButtonLink>
    </section>
  )
)

FreeTrialGetInTouchSection.displayName = 'FreeTrialGetInTouchSection'

export default FreeTrialGetInTouchSection

import { FC, memo } from 'react'
import { useQuery } from '@apollo/client'

import { Container } from '@components/containers'
import { Wave } from '@components/atoms'
import { Collapse, SectionTitle } from '@components/organisms'
import { IQuestion } from '@temp/types'
import { FREE_TRIAL_PAGE_QUERY } from '@queries'

import { TITLE } from './constants'

export interface IFreeTrialFaqSectionProps {}

export const FreeTrialFaqSection: FC<IFreeTrialFaqSectionProps> = memo(() => {
  const queryResult = useQuery(FREE_TRIAL_PAGE_QUERY)
  const faqs = queryResult?.data?.free_trial_page?.faqs ?? []

  return (
    <section className="relative pt-10 pb-14 md:pb-27 md:pt-17">
      <Container>
        <SectionTitle className="mb-6 md:mb-14">{TITLE}</SectionTitle>

        <div>
          {faqs?.map((item: IQuestion) => (
            <Collapse key={item.id} title={item.question}>
              {item.body}
            </Collapse>
          ))}
        </div>
      </Container>

      <Wave position="bottom" colorName="white" />
    </section>
  )
})

FreeTrialFaqSection.displayName = 'FreeTrialFaqSection'

export default FreeTrialFaqSection

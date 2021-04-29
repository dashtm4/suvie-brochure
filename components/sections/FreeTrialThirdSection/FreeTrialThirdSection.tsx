import { FC, memo } from 'react'

import { Layout } from '@components/containers'
import { Wave } from '@components/atoms'
import { Collapse } from '@components/organisms'

import { IFaq } from './types'
import { TITLE, FAQ } from './constants'

export interface IFreeTrialThirdSectionProps {}

export const FreeTrialThirdSection: FC<IFreeTrialThirdSectionProps> = memo(
  () => {
    return (
      <section className="relative pb-14 md:pb-27">
        <Layout>
          <h2 className="mb-5 font-serif text-2xl font-normal text-center md:text-4xl md:mb-24 text-secondary">
            {TITLE}
          </h2>

          <div>
            {FAQ.map((faq: IFaq, faqIndex: number) => (
              <Collapse key={faqIndex} title={faq.title}>
                {faq.content}
              </Collapse>
            ))}
          </div>
        </Layout>

        <Wave position="bottom" colorName="white" />
      </section>
    )
  }
)

FreeTrialThirdSection.displayName = 'FreeTrialThirdSection'

export default FreeTrialThirdSection

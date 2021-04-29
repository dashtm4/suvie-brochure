import { FC, memo } from 'react'
import { useQuery } from '@apollo/client'

import { Layout } from '@components/containers'
import { Wave } from '@components/atoms'
import { Collapse } from '@components/organisms'
import { SMART_MEALS_PAGE_QUERY } from '@queries'
import { IQuestion } from '@types'

import { TITLE } from './constants'

export interface ISmartMealsFifthSectionProps {}

export const SmartMealsFifthSection: FC<ISmartMealsFifthSectionProps> = memo(
  () => {
    const queryResult = useQuery(SMART_MEALS_PAGE_QUERY)
    const faqs = queryResult?.data?.smart_meals_page?.faqs ?? []

    return (
      <section className="relative pb-14 md:pb-27">
        <Layout>
          <h2 className="mb-5 font-serif text-2xl font-normal text-center md:text-4xl md:mb-24 text-secondary">
            {TITLE}
          </h2>

          <div>
            {faqs?.map((item: IQuestion) => (
              <Collapse key={item.id} title={item.question}>
                {item.body}
              </Collapse>
            ))}
          </div>
        </Layout>

        <Wave position="bottom" colorName="white" />
      </section>
    )
  }
)

SmartMealsFifthSection.displayName = 'SmartMealsFifthSection'

export default SmartMealsFifthSection

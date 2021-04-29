import { FC, memo } from 'react'
import classNames from 'classnames'
import { useQuery } from '@apollo/client'

import { Layout } from '@components/containers'
import { Wave } from '@components/atoms'
import { Collapse } from '@components/organisms'
import { HEALTH_PAGE_QUERY } from '@queries'
import { IQuestion } from '@types'

import { TITLE } from './constants'

import styles from './HealthForthSection.module.scss'

export interface IHealthForthSectionProps {}

export const HealthForthSection: FC<IHealthForthSectionProps> = memo(() => {
  const queryResult = useQuery(HEALTH_PAGE_QUERY)
  const faqs = queryResult?.data?.helth_page?.faqs ?? []

  return (
    <section
      className={classNames(
        'relative pt-10 pb-18 md:pb-27 md:pt-23',
        styles['health-forth-section']
      )}
    >
      <Wave colorHex="#eef0f5" className="hidden md:block" />

      <Layout>
        <h2 className="mb-5 font-serif text-2xl font-normal text-center md:text-4xl md:mb-24 text-secondary">
          {TITLE}
        </h2>

        <div>
          {faqs.map((item: IQuestion) => (
            <Collapse key={item.id} title={item?.question}>
              {item?.body}
            </Collapse>
          ))}
        </div>
      </Layout>

      <Wave position="bottom" colorHex="#eef0f5" className="hidden md:block" />
      <Wave position="bottom" colorName="white" className="block md:hidden" />
    </section>
  )
})

HealthForthSection.displayName = 'HealthForthSection'

export default HealthForthSection

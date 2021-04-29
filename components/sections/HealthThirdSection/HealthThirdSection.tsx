import { FC, memo, Fragment, useMemo } from 'react'
import { useQuery } from '@apollo/client'

import { Layout } from '@components/containers'
import { MealsList } from '@components/organisms'

import { Wave } from '@components/atoms'
import { HEALTH_PAGE_QUERY } from '@queries'
import { IMeal } from '@types'
import { normalizeMeal } from '@utils'

import { OVERVIEW, MOBILE_VERSION_OVERVIEW } from './constants'

export interface IHealthThirdSectionProps {}

export const HealthThirdSection: FC<IHealthThirdSectionProps> = memo(() => {
  const queryResult = useQuery(HEALTH_PAGE_QUERY)
  const meals = queryResult?.data?.health_page?.meals_list?.meals ?? []

  const normalizedMeals: IMeal[] = useMemo(
    () => meals?.map((meal) => normalizeMeal(meal)),
    [meals]
  )

  return (
    <section className="relative pb-10 md:pb-20">
      <Layout>
        <div className="hidden md:block">
          <h2 className="mb-4 font-serif text-4xl font-normal text-center text-secondary">
            {OVERVIEW.title.map((title: string, titleIndex: number) => (
              <Fragment key={titleIndex}>
                {title} <br />
              </Fragment>
            ))}
          </h2>
          <div className="text-base font-normal text-center mb-15 md:mb-23 text-quinary">
            {OVERVIEW.content.map((content: string, contentIndex: number) => (
              <Fragment key={contentIndex}>
                {content} <br />
              </Fragment>
            ))}
          </div>
        </div>
        <div className="block md:hidden">
          <h2 className="mb-4 font-serif text-4xl font-normal text-center text-secondary">
            {MOBILE_VERSION_OVERVIEW.title.map(
              (title: string, titleIndex: number) => (
                <Fragment key={titleIndex}>
                  {title} <br />
                </Fragment>
              )
            )}
          </h2>
          <div className="text-base font-normal text-center mb-15 md:mb-23 text-quinary">
            {MOBILE_VERSION_OVERVIEW.content.map(
              (content: string, contentIndex: number) => (
                <Fragment key={contentIndex}>
                  {content} <br />
                </Fragment>
              )
            )}
          </div>
        </div>
        <MealsList
          meals={normalizedMeals}
          numberOfMeals={18}
          loadMoreButtonText="Load More Meals"
        />
      </Layout>

      <Wave position="bottom" colorName="white" />
    </section>
  )
})

HealthThirdSection.displayName = 'HealthThirdSection'

export default HealthThirdSection

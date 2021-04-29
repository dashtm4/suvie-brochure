import { FC, memo, Fragment, RefObject, useMemo } from 'react'
import { useQuery } from '@apollo/client'

import { Layout } from '@components/containers'
import { MealsList } from '@components/organisms'
import { SMART_MEALS_PAGE_QUERY } from '@queries'
import { IMeal } from '@types'
import { normalizeMeal } from '@utils'

import { OVERVIEW, MOBILE_VERSION_OVERVIEW } from './constants'

export interface ISmartMealsForthSectionProps {
  mealsListRef?: RefObject<HTMLDivElement>
}

export const SmartMealsForthSection: FC<ISmartMealsForthSectionProps> = memo(
  ({ mealsListRef }) => {
    const queryResult = useQuery(SMART_MEALS_PAGE_QUERY)
    const meals = queryResult?.data?.smart_meals_page?.meals_list?.meals ?? []

    const normalizedMeals: IMeal[] = useMemo(
      () => meals?.map((meal) => normalizeMeal(meal)),
      [meals]
    )

    return (
      <section className="pb-25">
        <Layout>
          <div className="hidden md:block">
            <h2 className="font-serif text-4xl font-normal text-center md:mb-10 text-secondary">
              {OVERVIEW.title.map((title: string, titleIndex: number) => (
                <Fragment key={titleIndex}>
                  {title} <br />
                </Fragment>
              ))}
            </h2>
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
            forwardRef={mealsListRef}
            meals={normalizedMeals}
            mobileNumberOfMeals={5}
            numberOfMeals={9}
            loadMoreButtonText="Load More Meals"
          />
        </Layout>
      </section>
    )
  }
)

SmartMealsForthSection.displayName = 'SmartMealsForthSection'

export default SmartMealsForthSection

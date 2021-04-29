import { FC, memo, RefObject, useMemo } from 'react'
import { useQuery } from '@apollo/client'
import sortBy from 'lodash/sortBy'

import { Container, Row, Col } from '@components/containers'
import { SectionTitle, MealsPlanCard } from '@components/organisms'
import { ISmartMealsPlan } from '@types'
import { INTRO } from './constants'
import { SMART_MEALS_PLANS_QUERY } from '@queries'

export interface ISmartMealsThirdSectionProps {
  mealsListRef?: RefObject<HTMLDivElement>
}

export const SmartMealsThirdSection: FC<ISmartMealsThirdSectionProps> = memo(
  ({ mealsListRef }) => {
    const queryResult = useQuery(SMART_MEALS_PLANS_QUERY)
    const smartMealsPlans = queryResult?.data?.smartMealsPlans
    const sortedSmartMealsPlans = useMemo(() => sortBy(smartMealsPlans, 'id'), [
      smartMealsPlans
    ])

    return (
      <section className="md:pb-36 pb-18">
        <Container style={{ maxWidth: '65.3125rem' }}>
          <SectionTitle className="mb-4 md:mb-6">{INTRO.title}</SectionTitle>

          <div className="mb-8 text-center md:mb-9 text-secondary md:text-quinary md:max-w-sm md:mx-auto">
            {INTRO.description}
          </div>

          <Row className="items-stretch">
            {sortedSmartMealsPlans?.map((smartMealsPlan: ISmartMealsPlan) => (
              <Col key={smartMealsPlan?.title} className="w-full mb-4 md:w-1/3">
                <MealsPlanCard
                  smartMealsPlan={smartMealsPlan}
                  mealsListRef={mealsListRef}
                  className="h-full"
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    )
  }
)

SmartMealsThirdSection.displayName = 'SmartMealsThirdSection'

export default SmartMealsThirdSection

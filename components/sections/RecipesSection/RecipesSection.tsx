import { FC, memo, useMemo } from 'react'
import { useQuery } from '@apollo/client'

import { ButtonLink } from '@components/atoms'
import { SectionTitle, MealsList } from '@components/organisms'
import { Container } from '@components/containers'
import { BLOG_URL } from '@temp/config'
import { RECIPES_PAGE_QUERY } from '@queries'
import { IMeal } from '@types'
import { normalizeMeal } from '@utils'

export interface IRecipesSectionProps {}

export const RecipesSection: FC<IRecipesSectionProps> = memo(() => {
  const queryResult = useQuery(RECIPES_PAGE_QUERY)
  const meals = queryResult?.data?.recipes_page?.meals_list?.meals ?? []

  const normalizedMeals: IMeal[] = useMemo(
    () => meals?.map((meal) => normalizeMeal(meal)),
    [meals]
  )

  return (
    <section className="pt-8 pb-12 md:pt-20 md:pb-32">
      <Container>
        <SectionTitle className="mb-4">
          The possibilities are endless
        </SectionTitle>

        <div className="mb-5 text-center text-quinary md:max-w-xl md:mx-auto md:mb-7">
          If you’re looking for inspiration check out our Suvie Recette Recipe
          Blog.
        </div>

        <div className="mb-10 text-center">
          <ButtonLink href={BLOG_URL} isExternal={true} target="_blank">
            Read Recipes at Recette Blog
          </ButtonLink>
        </div>

        <MealsList meals={normalizedMeals} />
      </Container>
    </section>
  )
})

RecipesSection.displayName = 'RecipesSection'

export default RecipesSection

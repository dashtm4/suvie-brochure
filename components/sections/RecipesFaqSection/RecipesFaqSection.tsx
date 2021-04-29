import { FC, memo } from 'react'
import { useQuery } from '@apollo/client'

import { Wave } from '@components/atoms'
import { Container } from '@components/containers'
import { SectionTitle, Collapse } from '@components/organisms'
import { IQuestion } from '@temp/types'
import { RECIPES_PAGE_QUERY } from '@queries'

export interface IRecipesFaqSectionProps {}

export const RecipesFaqSection: FC<IRecipesFaqSectionProps> = memo(() => {
  const queryResult = useQuery(RECIPES_PAGE_QUERY)
  const faqs = queryResult?.data?.recipes_page?.faqs ?? []

  return (
    <section
      className="relative py-12 md:pt-33 md:pb-28"
      style={{ backgroundColor: '#eef0f5' }}
    >
      <Wave colorHex="#eef0f5" />

      <Container style={{ maxWidth: '65.5rem' }}>
        <SectionTitle className="mb-6 md:mb-14">
          Frequently asked questions
        </SectionTitle>

        <div>
          {faqs?.map((item: IQuestion) => (
            <Collapse key={item.id} title={item.question}>
              {item.body}
            </Collapse>
          ))}
        </div>
      </Container>

      <Wave position="bottom" colorHex="#eef0f5" />
    </section>
  )
})

RecipesFaqSection.displayName = 'RecipesFaqSection'

export default RecipesFaqSection

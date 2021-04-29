import { FC, memo } from 'react'
import { useQuery } from '@apollo/client'

import { Collapse, DefaultHero } from '@components/organisms'
import { Container } from '@components/containers'
import { IQuestion } from '@temp/types'
import { FAQ_PAGE_QUERY } from '@queries'

export interface IFaqTemplateProps {}

export const FaqTemplate: FC<IFaqTemplateProps> = memo(() => {
  const queryResult = useQuery(FAQ_PAGE_QUERY)
  const faqs = queryResult?.data?.faq_page?.faqs ?? []

  return (
    <main>
      <DefaultHero
        title="FAQ"
        subtitle="The most common questions about the Suvie System"
      />
      <Container className="py-20">
        {faqs.map((item: IQuestion) => (
          <Collapse key={item.id} title={item.question}>
            {item.body}
          </Collapse>
        ))}
      </Container>
    </main>
  )
})

FaqTemplate.displayName = 'FaqTemplate'

export default FaqTemplate

import { FC, memo } from 'react'
import { useQuery } from '@apollo/client'

import { Container } from '@components/containers'
import { SectionTitle, Collapse } from '@components/organisms'
import { IQuestion } from '@temp/types'
import { SHOP_PAGE_QUERY } from '@queries'

export interface IShopFifthSectionProps {}

export const ShopFifthSection: FC<IShopFifthSectionProps> = memo(() => {
  const queryResult = useQuery(SHOP_PAGE_QUERY)
  const faqs = queryResult?.data?.shop_page?.faqs ?? []

  return (
    <section className="bg-quaternary pt-7 pb-6 md:pt-15 md:pb-10">
      <Container style={{ maxWidth: '65.5rem' }}>
        <SectionTitle className="mb-14">
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
    </section>
  )
})

ShopFifthSection.displayName = 'ShopFifthSection'

export default ShopFifthSection

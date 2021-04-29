import { FC } from 'react'
import { GetStaticProps } from 'next'

import {
  SiteHead,
  SkipTo,
  SiteHeader,
  SiteFooter,
  UrgencyBar,
  CountdownBanner
} from '@components/organisms'
import { FullHeightLayout } from '@components/containers'
import { FaqTemplate } from '@components/templates'
import { initializeApollo } from '@temp/apolloClient'
import {
  URGENCY_BAR_QUERY,
  FAQ_PAGE_QUERY,
  COUNTDOWN_BANNER_QUERY
} from '@queries'

interface IFaqPageProps {}

export const FaqPage: FC<IFaqPageProps> = () => (
  <>
    <SiteHead title="FAQ" />
    <FullHeightLayout>
      <CountdownBanner />
      <UrgencyBar />
      <SkipTo />
      <SiteHeader />
      <FaqTemplate />
      <SiteFooter />
    </FullHeightLayout>
  </>
)

export const getStaticProps: GetStaticProps = async () => {
  try {
    const apolloClient = initializeApollo()

    await apolloClient.query({
      query: COUNTDOWN_BANNER_QUERY
    })

    await apolloClient.query({
      query: URGENCY_BAR_QUERY
    })

    await apolloClient.query({
      query: FAQ_PAGE_QUERY
    })

    return {
      props: {
        initialApolloState: apolloClient.cache.extract()
      },
      revalidate: 1
    }
  } catch (error) {
    return { props: {} }
  }
}

FaqPage.displayName = 'FaqPage'

export default FaqPage

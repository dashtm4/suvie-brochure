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
import { HealthTemplate } from '@components/templates'
import { initializeApollo } from '@temp/apolloClient'
import {
  COUNTDOWN_BANNER_QUERY,
  HEALTH_PAGE_QUERY,
  PRODUCTS_QUERY,
  URGENCY_BAR_QUERY
} from '@queries'

interface IHealthPageProps {}

export const HealthPage: FC<IHealthPageProps> = () => (
  <>
    <SiteHead title="Health" />
    <FullHeightLayout>
      <CountdownBanner />
      <UrgencyBar />
      <SkipTo />
      <SiteHeader />
      <HealthTemplate />
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
      query: HEALTH_PAGE_QUERY
    })

    await apolloClient.query({
      query: PRODUCTS_QUERY
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

HealthPage.displayName = 'HealthPage'

export default HealthPage

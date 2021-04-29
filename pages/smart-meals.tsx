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
import { SmartMealsTemplate } from '@components/templates'
import { initializeApollo } from '@temp/apolloClient'
import {
  URGENCY_BAR_QUERY,
  SMART_MEALS_PAGE_QUERY,
  PRODUCTS_QUERY,
  SMART_MEALS_PLANS_QUERY,
  COUNTDOWN_BANNER_QUERY
} from '@queries'

interface ISmartMealsPageProps {}

export const SmartMealsPage: FC<ISmartMealsPageProps> = () => (
  <>
    <SiteHead title="Smart Meals" />
    <FullHeightLayout>
      <CountdownBanner />
      <UrgencyBar />
      <SkipTo />
      <SiteHeader />
      <SmartMealsTemplate />
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
      query: SMART_MEALS_PAGE_QUERY
    })

    await apolloClient.query({
      query: SMART_MEALS_PLANS_QUERY
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

SmartMealsPage.displayName = 'SmartMealsPage'

export default SmartMealsPage

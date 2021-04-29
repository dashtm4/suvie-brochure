import { FC } from 'react'
import { GetStaticProps } from 'next'

import {
  SiteHead,
  SiteHeader,
  SiteFooter,
  UrgencyBar,
  CountdownBanner
} from '@components/organisms'
import { FullHeightLayout } from '@components/containers'
import { FreeTrialTemplate } from '@components/templates'
import { initializeApollo } from '@temp/apolloClient'
import {
  FREE_TRIAL_PAGE_QUERY,
  URGENCY_BAR_QUERY,
  PRODUCTS_QUERY,
  COUNTDOWN_BANNER_QUERY
} from '@queries'

interface IFreeTrialProps {}

export const FreeTrial: FC<IFreeTrialProps> = () => {
  return (
    <div>
      <SiteHead title="Free Trial" />
      <FullHeightLayout>
        <CountdownBanner />
        <UrgencyBar />
        <SiteHeader />
        <FreeTrialTemplate />
        <SiteFooter />
      </FullHeightLayout>
    </div>
  )
}

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
      query: FREE_TRIAL_PAGE_QUERY
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

FreeTrial.displayName = 'FreeTrial'

export default FreeTrial

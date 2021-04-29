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
import { PrivacyPolicyTemplate } from '@components/templates'
import { initializeApollo } from '@temp/apolloClient'
import { COUNTDOWN_BANNER_QUERY, URGENCY_BAR_QUERY } from '@queries'

interface IPrivacyPolicyPageProps {}

export const PrivacyPolicyPage: FC<IPrivacyPolicyPageProps> = () => (
  <>
    <SiteHead title="Privacy Policy" />
    <FullHeightLayout>
      <CountdownBanner />
      <UrgencyBar />
      <SkipTo />
      <SiteHeader />
      <PrivacyPolicyTemplate />
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

PrivacyPolicyPage.displayName = 'PrivacyPolicyPage'

export default PrivacyPolicyPage

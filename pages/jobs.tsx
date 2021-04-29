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
import { JobsTemplate } from '@components/templates'
import { initializeApollo } from '@temp/apolloClient'
import { COUNTDOWN_BANNER_QUERY, URGENCY_BAR_QUERY } from '@queries'

interface IJobsPageProps {}

export const JobsPage: FC<IJobsPageProps> = () => (
  <>
    <SiteHead title="Jobs" />
    <FullHeightLayout>
      <CountdownBanner />
      <UrgencyBar />
      <SkipTo />
      <SiteHeader />
      <JobsTemplate />
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

JobsPage.displayName = 'JobsPage'

export default JobsPage

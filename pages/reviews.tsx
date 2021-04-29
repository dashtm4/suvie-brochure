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
import { ReviewsTemplate } from '@components/templates'
import { initializeApollo } from '@temp/apolloClient'
import { COUNTDOWN_BANNER_QUERY, URGENCY_BAR_QUERY } from '@queries'

interface IReviewsPageProps {}

export const ReviewsPage: FC<IReviewsPageProps> = () => (
  <>
    <SiteHead title="Reviews" />
    <FullHeightLayout>
      <CountdownBanner />
      <UrgencyBar />
      <SkipTo />
      <SiteHeader />
      <ReviewsTemplate />
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

ReviewsPage.displayName = 'ReviewsPage'

export default ReviewsPage

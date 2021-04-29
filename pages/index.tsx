import { FC } from 'react'
import { GetStaticProps } from 'next'

import {
  SiteHead,
  CountdownBanner,
  UrgencyBar,
  SkipTo,
  SiteHeader,
  SiteFooter,
  AffirmScript
} from '@components/organisms'
import { FullHeightLayout } from '@components/containers'
import { HomeTemplate } from '@components/templates'
import { initializeApollo } from '@temp/apolloClient'
import {
  COUNTDOWN_BANNER_QUERY,
  HOME_PAGE_QUERY,
  PRODUCTS_QUERY,
  URGENCY_BAR_QUERY
} from '@queries'

interface IHomePageProps {}

export const HomePage: FC<IHomePageProps> = () => (
  <>
    <SiteHead />
    <FullHeightLayout>
      <CountdownBanner />
      <UrgencyBar />
      <SkipTo />
      <SiteHeader />
      <HomeTemplate />
      <SiteFooter />
      {process.env.NODE_ENV === 'production' && <AffirmScript />}
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
      query: HOME_PAGE_QUERY
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

HomePage.displayName = 'HomePage'

export default HomePage

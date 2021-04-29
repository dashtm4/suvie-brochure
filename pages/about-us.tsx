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
import { AboutUsTemplate } from '@components/templates'
import { initializeApollo } from '@temp/apolloClient'
import {
  PRODUCTS_QUERY,
  COUNTDOWN_BANNER_QUERY,
  URGENCY_BAR_QUERY
} from '@queries'

interface IAboutUsProps {}

export const AboutUs: FC<IAboutUsProps> = () => (
  <>
    <SiteHead title="About Us" />
    <FullHeightLayout>
      <CountdownBanner />
      <UrgencyBar />
      <SiteHeader />
      <AboutUsTemplate />
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

AboutUs.displayName = 'AboutUs'

export default AboutUs

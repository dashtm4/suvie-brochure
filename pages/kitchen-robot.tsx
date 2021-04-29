import { FC } from 'react'
import { GetStaticProps } from 'next'

import {
  SkipTo,
  SiteHead,
  SiteHeader,
  SiteFooter,
  UrgencyBar,
  CountdownBanner
} from '@components/organisms'
import { FullHeightLayout } from '@components/containers'
import { KitchenRobotTemplate } from '@components/templates'
import { initializeApollo } from '@temp/apolloClient'
import {
  URGENCY_BAR_QUERY,
  KITCHEN_ROBOT_PAGE_QUERY,
  PRODUCTS_QUERY,
  COUNTDOWN_BANNER_QUERY
} from '@queries'

interface IKitchenRobotPageProps {}

export const KitchenRobotPage: FC<IKitchenRobotPageProps> = () => (
  <>
    <SiteHead title="Kitchen Robot" />
    <FullHeightLayout>
      <CountdownBanner />
      <UrgencyBar />
      <SkipTo />
      <SiteHeader />
      <KitchenRobotTemplate />
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
      query: KITCHEN_ROBOT_PAGE_QUERY
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

KitchenRobotPage.displayName = 'KitchenRobotPage'

export default KitchenRobotPage

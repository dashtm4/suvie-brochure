import { FC } from 'react'
import { GetStaticProps } from 'next'

import {
  SiteHead,
  SkipTo,
  SimpleSiteHeader,
  SiteFooter,
  UrgencyBar,
  AffirmScript,
  CountdownBanner
} from '@components/organisms'
import { FullHeightLayout } from '@components/containers'
import { ShopTemplate } from '@components/templates'
import { initializeApollo } from '@temp/apolloClient'
import {
  SHOP_PAGE_QUERY,
  URGENCY_BAR_QUERY,
  PRODUCTS_QUERY,
  SMART_MEALS_QUERY,
  COUNTDOWN_BANNER_QUERY
} from '@queries'

interface IShopPageProps {}

export const ShopPage: FC<IShopPageProps> = () => (
  <>
    <SiteHead title="Shop Page" />
    <FullHeightLayout>
      <CountdownBanner />
      <UrgencyBar />
      <SkipTo />
      <SimpleSiteHeader />
      <ShopTemplate />
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
      query: SHOP_PAGE_QUERY
    })

    await apolloClient.query({
      query: PRODUCTS_QUERY
    })

    await apolloClient.query({
      query: SMART_MEALS_QUERY
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

ShopPage.displayName = 'ShopPage'

export default ShopPage

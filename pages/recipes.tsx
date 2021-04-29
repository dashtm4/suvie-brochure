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
import { RecipesTemplate } from '@components/templates'
import { initializeApollo } from '@temp/apolloClient'
import {
  URGENCY_BAR_QUERY,
  RECIPES_PAGE_QUERY,
  PRODUCTS_QUERY,
  COUNTDOWN_BANNER_QUERY
} from '@queries'

interface IRecipesPageProps {}

export const RecipesPage: FC<IRecipesPageProps> = () => (
  <>
    <SiteHead title="Recipes" />
    <FullHeightLayout>
      <CountdownBanner />
      <UrgencyBar />
      <SkipTo />
      <SiteHeader />
      <RecipesTemplate />
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
      query: RECIPES_PAGE_QUERY
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

RecipesPage.displayName = 'RecipesPage'

export default RecipesPage

import { FC, memo } from 'react'
import Head from 'next/head'

import { GoogleTagManagerScript, PrivyScript } from '@components/organisms'
import { META_DEFAULTS } from '@temp/config'

export interface ISiteHeadProps {
  title?: string
  description?: string
}

export const SiteHead: FC<ISiteHeadProps> = memo(
  ({ title, description }: ISiteHeadProps) => (
    <Head>
      <title>
        {title
          ? `${title} | ${META_DEFAULTS.title}`
          : `${META_DEFAULTS.title} | ${META_DEFAULTS.description}`}
      </title>
      <meta
        name="description"
        content={description ?? META_DEFAULTS.description}
      />
      <link rel="shortcut icon" type="image/jpg" href={META_DEFAULTS.favicon} />

      {process.env.NODE_ENV === 'production' && (
        <>
          <GoogleTagManagerScript />
          <PrivyScript />
        </>
      )}
    </Head>
  )
)

SiteHead.displayName = 'SiteHead'

export default SiteHead

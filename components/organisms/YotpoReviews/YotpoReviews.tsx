import { FC, memo, useEffect } from 'react'

import { YOTPO_APP_KEY } from '@temp/constants'

export interface IYotpoReviewsProps {}

export const YotpoReviews: FC<IYotpoReviewsProps> = memo(() => {
  useEffect(() => {
    const scriptTag = document.createElement('script')
    scriptTag.src = `//staticw2.yotpo.com/${YOTPO_APP_KEY}/widget.js`
    scriptTag.async = true
    document.body.appendChild(scriptTag)
  }, [])

  useEffect(() => {
    ;(window as any)?.yotpo?.refreshWidgets()
  }, [])

  return (
    <div className="yotpo yotpo-main-widget" data-product-id="1">
      <div className="text-center text-3xl">Loading...</div>
    </div>
  )
})

YotpoReviews.displayName = 'YotpoReviews'

export default YotpoReviews

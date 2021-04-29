import { FC, memo, useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { useQuery } from '@apollo/client'
import isEmpty from 'lodash/isEmpty'

import { URGENCY_BAR_QUERY } from '@queries'

export interface IUrgencyBarProps {}

export const UrgencyBar: FC<IUrgencyBarProps> = memo(() => {
  const queryResult = useQuery(URGENCY_BAR_QUERY)
  const urgencyBar = queryResult?.data?.urgencyBar ?? {}

  const [widthPercentage, setWidthPercentage] = useState<number>(0)

  useEffect(() => {
    setTimeout(() => setWidthPercentage(urgencyBar?.percentage), 1000)
  }, [urgencyBar?.percentage])

  if (isEmpty(urgencyBar)) {
    return null
  }

  return (
    <div className="px-3 pt-4 pb-5 text-white bg-secondary md:flex md:gap-8 md:justify-between md:items-center md:py-6 md:pl-8 md:pr-6">
      <div className="flex items-center mb-5 font-serif text-2xl md:mb-0">
        <span
          role="heading"
          aria-level={2}
          className="mr-6 font-bold leading-tight md:mr-3"
          style={{ maxWidth: '7.5rem' }}
        >
          {urgencyBar?.info?.title}
        </span>
        <span role="heading" aria-level={3}>
          {urgencyBar?.info?.subtitle}
        </span>
      </div>

      <div className="md:flex-grow" style={{ maxWidth: '41.875rem' }}>
        <ReactMarkdown
          plugins={[gfm]}
          className="mb-3 text-sm font-normal tracking-wider uppercase md:flex-shrink-0"
        >
          {urgencyBar?.info?.description}
        </ReactMarkdown>

        <div className="md:flex md:gap-4">
          <div
            role="progressbar"
            aria-valuenow={widthPercentage}
            aria-valuemin={0}
            aria-valuemax={100}
            className="relative w-full h-4 mb-2 md:mb-0"
          >
            <div
              className="absolute top-0 left-0 h-4 transition-all duration-1000 ease-out rounded-lg"
              style={{
                width: `${widthPercentage}%`,
                background:
                  'linear-gradient(90deg, #83ac9f 0%, #eaa107 84%, #c14635 160%)'
              }}
            />
            <div className="h-4 bg-white rounded-lg opacity-20" />
          </div>
        </div>
      </div>
    </div>
  )
})

UrgencyBar.displayName = 'UrgencyBar'

export default UrgencyBar

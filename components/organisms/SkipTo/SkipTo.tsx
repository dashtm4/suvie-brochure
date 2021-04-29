import { FC, memo, useEffect, useState } from 'react'
import uniqueId from 'lodash/uniqueId'
import classNames from 'classnames'

export interface ISkipToProps {}

export const SkipTo: FC<ISkipToProps> = memo(() => {
  const [skipTitles, setSkipTitles] = useState([])

  useEffect(() => {
    document.querySelectorAll('section').forEach((section: HTMLElement) => {
      const skipTitle = section.querySelector<HTMLElement>('h1, h2')?.innerText

      if (skipTitle) {
        const sectionId = uniqueId('section-')
        section.id = sectionId

        setSkipTitles((value) => [
          ...value,
          { id: sectionId, title: skipTitle }
        ])
      }
    })
  }, [])

  return (
    <div
      className={classNames(
        'fixed top-0 left-1/2 z-50 p-3 bg-white rounded transform -translate-x-1/2 -translate-y-full max-w-sm w-full',
        'focus-within:shadow-2xl focus-within:translate-y-0'
      )}
    >
      <div className="mb-2 font-bold">Skip to</div>
      <ul>
        {skipTitles?.map((skipTitle) => (
          <li key={skipTitle?.id}>
            <a href={`#${skipTitle?.id}`}>{skipTitle?.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
})

SkipTo.displayName = 'SkipTo'

export default SkipTo

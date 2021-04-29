import { createRef, FC, memo, RefObject, useEffect } from 'react'

export interface IPrequalifyNowLinkProps {
  forwardRed?: RefObject<any>
}

export const PrequalifyNowLink: FC<IPrequalifyNowLinkProps> = memo(
  ({ forwardRed = createRef() }) => {
    useEffect(() => {
      // @ts-ignore
      window?.affirm?.ui?.ready(() => {
        // @ts-ignore
        window?.affirm?.ui?.refresh()
      })
    }, [])

    return (
      <a
        ref={forwardRed}
        role="button"
        tabIndex={0}
        className="affirm-site-modal font-light underline"
      >
        Prequalify Now
      </a>
    )
  }
)

PrequalifyNowLink.displayName = 'PrequalifyNowLink'

export default PrequalifyNowLink

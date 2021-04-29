import { useEffect } from 'react'
import { useIsVisible } from 'react-is-visible'

import { useWindowSize } from '@temp/hooks/useWindowSize'

export const useToggleVideo = (ref, activeOnDesktop = true) => {
  const windowSize = useWindowSize()
  const isVideoVisible = useIsVisible(ref)

  useEffect(() => {
    if (!activeOnDesktop && windowSize.width > 768) {
      return
    }

    if (isVideoVisible) {
      ref.current?.play()?.catch()
    } else {
      ref.current?.pause()
    }
  }, [ref, windowSize.width, isVideoVisible])
}

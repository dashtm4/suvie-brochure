import { FC, memo, useMemo, useState } from 'react'

import { Layout } from '@components/containers'
import { VideoTabs, SectionTitle } from '@components/organisms'

import { TITLE, HEALTH_TAB1, HEALTH_TAB2, HEALTH_TAB3 } from './constants'

export interface IHealthSecondSectionProps {}

export const HealthSecondSection: FC<IHealthSecondSectionProps> = memo(() => {
  const [activeIndex1, setActiveIndex1] = useState<number>(0)
  const [activeIndex2, setActiveIndex2] = useState<number>(0)
  const [activeIndex3, setActiveIndex3] = useState<number>(0)

  const itemVideos1 = useMemo(
    () => HEALTH_TAB1.items.map((item) => item.videoSrc),
    [HEALTH_TAB1]
  )

  const itemPosters1 = useMemo(
    () => HEALTH_TAB1.items.map((item) => item.imageSrc),
    [HEALTH_TAB1]
  )

  const itemVideos2 = useMemo(
    () => HEALTH_TAB2.items.map((item) => item.videoSrc),
    [HEALTH_TAB2]
  )

  const itemPosters2 = useMemo(
    () => HEALTH_TAB2.items.map((item) => item.imageSrc),
    [HEALTH_TAB2]
  )

  const itemVideos3 = useMemo(
    () => HEALTH_TAB3.items.map((item) => item.videoSrc),
    [HEALTH_TAB3]
  )

  const itemPosters3 = useMemo(
    () => HEALTH_TAB3.items.map((item) => item.imageSrc),
    [HEALTH_TAB3]
  )

  const itemMediaTitles3 = useMemo(
    () => HEALTH_TAB3.items.map((item) => item.mediaTitle),
    [HEALTH_TAB3]
  )

  const itemMediaDescriptions3 = useMemo(
    () => HEALTH_TAB3.items.map((item) => item.mediaDescription),
    [HEALTH_TAB3]
  )

  return (
    <section className="md:pb-20 md:pt-19">
      <Layout>
        <SectionTitle className="mb-15 md:mb-23 md:max-w-xl md:mx-auto">
          {TITLE}
        </SectionTitle>

        <VideoTabs
          tabData={HEALTH_TAB1}
          activeIndex={activeIndex1}
          itemVideos={itemVideos1}
          itemPosters={itemPosters1}
          setActiveIndex={setActiveIndex1}
          direction="reverse"
        />

        <VideoTabs
          tabData={HEALTH_TAB2}
          activeIndex={activeIndex2}
          itemVideos={itemVideos2}
          itemPosters={itemPosters2}
          setActiveIndex={setActiveIndex2}
        />

        <VideoTabs
          tabData={HEALTH_TAB3}
          activeIndex={activeIndex3}
          itemVideos={itemVideos3}
          itemTitles={itemMediaTitles3}
          itemDescriptions={itemMediaDescriptions3}
          itemPosters={itemPosters3}
          setActiveIndex={setActiveIndex3}
          direction="reverse"
        />
      </Layout>
    </section>
  )
})

HealthSecondSection.displayName = 'HealthSecondSection'

export default HealthSecondSection

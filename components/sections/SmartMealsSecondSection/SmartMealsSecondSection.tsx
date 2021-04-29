import { FC, memo, useMemo, useState } from 'react'
import Image from 'next/image'

import { Layout } from '@components/containers'
import { VideoTabs } from '@components/organisms'

import { OVERVIEW, SMART_MEALS_TAB } from './constants'

export interface ISmartMealsSecondSectionProps {}

export const SmartMealsSecondSection: FC<ISmartMealsSecondSectionProps> = memo(
  () => {
    const [activeIndex, setActiveIndex] = useState<number>(0)

    const itemVideos = useMemo(
      () => SMART_MEALS_TAB?.items?.map((item) => item?.videoSrc),
      [SMART_MEALS_TAB]
    )

    const itemPosters = useMemo(
      () => SMART_MEALS_TAB?.items?.map((item) => item?.imageSrc),
      [SMART_MEALS_TAB]
    )

    return (
      <section className="relative pt-6 md:pb-20 md:pt-22">
        <Layout>
          <div className="mb-28 text-center" role="presentation">
            <Image width={75} height={75} src={OVERVIEW?.imageSrc} alt="" />
            <h2 className="mb-5 font-serif text-3xl font-normal text-secondary">
              {OVERVIEW?.title?.pre}
              <span className="font-medium"> {OVERVIEW?.title?.bold}</span>
            </h2>
            <div className="mx-auto max-w-xl font-serif text-2xl font-normal md:text-4xl text-secondary">
              {OVERVIEW?.content}
            </div>
          </div>
          <VideoTabs
            tabData={SMART_MEALS_TAB}
            activeIndex={activeIndex}
            itemVideos={itemVideos}
            itemPosters={itemPosters}
            setActiveIndex={setActiveIndex}
            direction="reverse"
          />
        </Layout>
      </section>
    )
  }
)

SmartMealsSecondSection.displayName = 'SmartMealsSecondSection'

export default SmartMealsSecondSection

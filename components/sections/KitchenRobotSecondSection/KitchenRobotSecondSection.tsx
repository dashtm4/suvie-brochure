import { FC, useState, useMemo } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'

import { ButtonLink, Typography, Wave } from '@components/atoms'
import {
  Overview,
  VideoGalleryCard,
  Video,
  StartingAt
} from '@components/organisms'
import { Layout } from '@components/containers'

import {
  OVERVIEW,
  OVERVIEW_TAG,
  HOW_IT_WORKS_TAB1,
  HOW_IT_WORKS_TAB2,
  HOW_IT_WORKS_3
} from './constants'
import { PATHS } from '@temp/config'

export interface IKitchenRobotSecondSectionProps {}

export const KitchenRobotSecondSection: FC<IKitchenRobotSecondSectionProps> = () => {
  const [activeIndex1, setActiveIndex1] = useState<number>(0)
  const [activeIndex2, setActiveIndex2] = useState<number>(0)

  const itemVideos1 = useMemo(
    () => HOW_IT_WORKS_TAB1.items.map((item) => item.videoSrc),
    [HOW_IT_WORKS_TAB1]
  )

  const itemPosters1 = useMemo(
    () => HOW_IT_WORKS_TAB1.items.map((item) => item.imageSrc),
    [HOW_IT_WORKS_TAB1]
  )

  const itemVideos2 = useMemo(
    () => HOW_IT_WORKS_TAB2.items.map((item) => item.videoSrc),
    [HOW_IT_WORKS_TAB1]
  )

  const itemPosters2 = useMemo(
    () => HOW_IT_WORKS_TAB2.items.map((item) => item.imageSrc),
    [HOW_IT_WORKS_TAB1]
  )

  const renderTabs = (
    tabData,
    activeIndex: number,
    itemVideos: string[],
    itemPosters: string[],
    setActiveIndex: (index: number) => void,
    direction: string = 'normal'
  ) => {
    return (
      <div className="flex items-center mb-12 -mx-8 md:mb-20 md:mx-0">
        <div
          className={classNames('hidden md:block md:w-1/2', {
            'md:pl-10 order-2': direction === 'reverse',
            'md:pr-10 ': direction === 'normal'
          })}
        >
          <VideoGalleryCard
            className="shadow-md"
            videos={itemVideos}
            activeVideoIndex={activeIndex}
            setActiveVideoIndex={setActiveIndex}
          />
        </div>
        <div
          className={classNames('w-full md:w-1/2', {
            'md:pl-8 md:pr-10': direction === 'reverse',
            'md:pr-8 md:pl-10': direction === 'normal'
          })}
        >
          <Typography
            variant="subtitle2"
            className="mb-5 font-normal text-center md:text-left"
          >
            {tabData.title}
          </Typography>

          <Tabs
            selectedIndex={activeIndex}
            onSelect={(index: number) => setActiveIndex(index)}
            selectedTabClassName="border-b-4 border-primary-default"
            selectedTabPanelClassName="font-light px-8 md:px-0"
          >
            <VideoGalleryCard
              videos={itemVideos}
              posters={itemPosters}
              activeVideoIndex={activeIndex}
              setActiveVideoIndex={setActiveIndex}
              className="mb-4 md:hidden"
            />
            <TabList className="flex justify-center px-8 mb-5 text-center border-b md:px-0 md:justify-start">
              {tabData.items?.map((item) => (
                <Tab
                  key={item?.title}
                  className="px-1 pb-2 mx-2 font-serif text-lg font-normal cursor-pointer text-secondary"
                >
                  {item?.title}
                </Tab>
              ))}
            </TabList>

            {tabData.items?.map((item) => (
              <TabPanel
                key={item?.title}
                className="mb-4 text-center md:mb-0 md:text-left"
              >
                <Typography className="text-gray-700">
                  {item?.description}
                </Typography>
              </TabPanel>
            ))}

            <div className="text-center md:text-left">
              <Image
                width={tabData?.image?.width}
                height={tabData?.image?.height}
                src={tabData?.image?.src}
                alt=""
              />
            </div>
          </Tabs>
        </div>
      </div>
    )
  }

  return (
    <section className="relative pt-14 md:pt-17">
      <Wave colorName="white" className="hidden md:block" />

      <div className="mb-2 text-center" role="presentation">
        <Image
          width={OVERVIEW_TAG.width}
          height={OVERVIEW_TAG.height}
          src={OVERVIEW_TAG.src}
          alt="overview-tag"
        />
      </div>

      <Layout>
        <Overview className={classNames('mb-20 md:mb-24')} content={OVERVIEW} />

        {renderTabs(
          HOW_IT_WORKS_TAB1,
          activeIndex1,
          itemVideos1,
          itemPosters1,
          setActiveIndex1,
          'reverse'
        )}

        {renderTabs(
          HOW_IT_WORKS_TAB2,
          activeIndex2,
          itemVideos2,
          itemPosters2,
          setActiveIndex2
        )}

        <div className="flex items-center px-8 -mx-8 md:px-0 mb-27 md:mx-0">
          <div className="order-2 hidden md:block md:w-1/2 md:pl-10">
            <Video
              className="w-full rounded-none md:rounded-lg h-84 md:h-90"
              src={HOW_IT_WORKS_3.src}
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-8 md:pr-10">
            <Typography
              variant="subtitle2"
              className="mb-5 font-normal text-center md:text-left"
            >
              {HOW_IT_WORKS_3.title}
            </Typography>
            <Typography className="mb-6 text-gray-700">
              {HOW_IT_WORKS_3.content}
            </Typography>
          </div>
        </div>

        <div className="px-8 text-center mb-13">
          <div className="mb-2 md:mb-5" role="presentation">
            <Image
              width="150"
              height="150"
              src="/images/kitchen-robot/home-trial--seal.svg"
              alt=""
            />
          </div>
          <Typography variant="subtitle2" className="mb-5 text-center md:mb-6">
            Try Suvie risk-free with a 100-day home trial.
          </Typography>

          <ButtonLink
            href={PATHS.SHOP_PAGE}
            className="max-w-full mb-3 w-51 md:mx-auto"
          >
            Buy now
          </ButtonLink>

          <StartingAt showTitle={false} />
        </div>
      </Layout>
    </section>
  )
}

KitchenRobotSecondSection.displayName = 'KitchenRobotSecondSection'

export default KitchenRobotSecondSection

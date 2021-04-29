import { FC, memo } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'

import { Typography } from '@components/atoms'
import { VideoGalleryCard } from '@components/organisms'

export interface IVideoTabsProps {
  tabData: any
  activeIndex: number
  itemVideos?: string[]
  itemTitles?: string[]
  itemDescriptions?: string[]
  itemPosters?: string[]
  setActiveIndex: (index: number) => void
  direction?: string
}

export const VideoTabs: FC<IVideoTabsProps> = memo(
  ({
    tabData,
    activeIndex,
    itemVideos,
    itemTitles,
    itemDescriptions,
    itemPosters,
    setActiveIndex,
    direction = 'normal'
  }: IVideoTabsProps) => (
    <div className="flex items-center mb-12 -mx-8 md:mb-20 md:mx-0">
      <div
        className={classNames('relative hidden md:block md:w-1/2', {
          'md:pl-10 order-2': direction === 'reverse',
          'md:pr-10 ': direction === 'normal'
        })}
      >
        <VideoGalleryCard
          className="shadow-md"
          videos={itemVideos}
          titles={itemTitles}
          descriptions={itemDescriptions}
          posters={itemPosters}
          activeVideoIndex={activeIndex}
          setActiveVideoIndex={setActiveIndex}
          showPagination={false}
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
          {tabData?.title}
        </Typography>

        <Tabs
          selectedIndex={activeIndex}
          onSelect={(index: number) => setActiveIndex(index)}
          selectedTabClassName="border-b-4 border-primary-default"
          selectedTabPanelClassName="font-light px-8 md:px-0"
        >
          <VideoGalleryCard
            videos={itemVideos}
            titles={itemTitles}
            descriptions={itemDescriptions}
            posters={itemPosters}
            activeVideoIndex={activeIndex}
            setActiveVideoIndex={setActiveIndex}
            showPagination={false}
            className="mb-4 md:hidden"
          />
          <TabList className="flex justify-around gap-6 px-8 mb-5 text-center border-b md:px-0 md:justify-start">
            {tabData?.items?.map((item) => (
              <Tab
                key={item?.title}
                className="pb-2 font-serif text-lg font-normal cursor-pointer text-secondary"
              >
                {item?.title}
              </Tab>
            ))}
          </TabList>

          {tabData?.items?.map((item) => (
            <TabPanel key={item?.title} className="text-center md:text-left">
              <Typography className="text-gray-700 ">
                {item?.description}
              </Typography>
              {tabData?.image && (
                <div className="mt-4" role="presentation">
                  <Image
                    width={tabData?.image?.width}
                    height={tabData?.image?.height}
                    src={tabData?.image?.src}
                    alt=""
                  />
                </div>
              )}
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  )
)

VideoTabs.displayName = 'VideoTabs'

export default VideoTabs

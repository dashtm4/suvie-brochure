import { FC, memo, useMemo, useState } from 'react'

import { HorizontalTabsListItem, HorizontalTabsPanel } from '@components/atoms'
import { HorizontalTabsList } from '@components/molecules'
import {
  HorizontalTabs,
  SectionTitle,
  VideoGalleryCard
} from '@components/organisms'
import { Container, Row } from '@components/containers'

import { TITLE, TABS_TITLE, TABS_CONTENT } from './constants'

export interface IRecipesYourChoiceSectionProps {}

export const RecipesYourChoiceSection: FC<IRecipesYourChoiceSectionProps> = memo(
  () => {
    const [activeIndex, setActiveIndex] = useState<number>(0)

    const itemVideos = useMemo(
      () => TABS_CONTENT.map((item) => item.videoSrc),
      [TABS_CONTENT]
    )

    return (
      <section className="pt-16 pb-9 md:pt-24 md:pb-20">
        <Container>
          <SectionTitle className="max-w-xl mx-auto mb-12 md:mb-24">
            {TITLE}
          </SectionTitle>

          <Row className="items-center justify-between">
            <div className="w-full mb-4 md:mb-0 md:w-1/2 md:order-1">
              <SectionTitle className="mb-4 md:hidden">
                {TABS_TITLE}
              </SectionTitle>

              <VideoGalleryCard
                videos={itemVideos}
                activeVideoIndex={activeIndex}
                setActiveVideoIndex={setActiveIndex}
              />
            </div>

            <div className="w-full text-center md:w-5/12 md:px-3 md:order-0 md:text-left">
              <SectionTitle alignMd="left" className="hidden md:block md:mb-6">
                {TABS_TITLE}
              </SectionTitle>

              <HorizontalTabs
                selectedIndex={activeIndex}
                onSelect={(index) => setActiveIndex(index)}
              >
                <HorizontalTabsList theme="light">
                  {TABS_CONTENT.map((item) => (
                    <HorizontalTabsListItem key={item.title} theme="light">
                      {item.title}
                    </HorizontalTabsListItem>
                  ))}
                </HorizontalTabsList>

                {TABS_CONTENT?.map((item) => (
                  <HorizontalTabsPanel key={item.title}>
                    <div className="mb-4 text-quinary md:mb-6">
                      {item.description}
                    </div>

                    <ul className="px-3 text-quinary md:px-0">
                      {item?.options?.map((option) => (
                        <li key={option}>{option}</li>
                      ))}
                    </ul>
                  </HorizontalTabsPanel>
                ))}
              </HorizontalTabs>
            </div>
          </Row>
        </Container>
      </section>
    )
  }
)

RecipesYourChoiceSection.displayName = 'RecipesYourChoiceSection'

export default RecipesYourChoiceSection

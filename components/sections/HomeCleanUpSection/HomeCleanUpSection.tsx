import { FC, memo } from 'react'

import { Wave } from '@components/atoms'
import { Col, Container, Row } from '@components/containers'
import { SectionTitle, VideoCard } from '@components/organisms'

import { TITLE, SUBTITLE, VIDEO_SRC } from './constants'

export interface IHomeCleanUpSectionProps {}

export const HomeCleanUpSection: FC<IHomeCleanUpSectionProps> = memo(() => (
  <section
    className="relative pt-8 pb-12 text-center md:text-left"
    style={{ backgroundColor: '#f4f3f2' }}
  >
    <Container>
      <Row className="items-center justify-between">
        <div className="w-full md:px-3 md:w-1/2">
          <VideoCard videoSrc={VIDEO_SRC} className="mb-8" />
        </div>

        <Col className="w-full md:w-5/12">
          <div className="md:max-w-sm">
            <SectionTitle alignMd="left" className="mb-4 md:mb-2">
              {TITLE}
            </SectionTitle>
            <div className="text-quinary">{SUBTITLE}</div>
          </div>
        </Col>
      </Row>
    </Container>

    <Wave position="bottom" colorHex="#f4f3f2" style={{ zIndex: 1 }} />
  </section>
))

HomeCleanUpSection.displayName = 'HomeCleanUpSection'

export default HomeCleanUpSection

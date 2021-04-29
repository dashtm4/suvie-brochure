import { FC, memo } from 'react'
import Image from 'next/image'

import { Row, Col } from '@components/containers'

export interface IPressListProps {}

export const PressList: FC<IPressListProps> = memo(() => (
  <Row className="items-center md:max-w-4xl md:mx-auto">
    <Col className="w-1/3 md:w-1/6">
      <Image
        width="114"
        height="49"
        src="/images/the-spoon-logo.png"
        alt="The Spoon"
      />
    </Col>

    <Col className="w-1/3 md:w-1/6">
      <Image
        width="92"
        height="66"
        src="/images/cnet-logo.png"
        alt="The Spoon"
      />
    </Col>

    <Col className="w-1/3 md:w-1/6">
      <Image width="135" height="65" src="/images/cbs-logo.png" alt="CBS" />
    </Col>

    <Col className="w-1/3 md:w-1/6">
      <Image
        width="90"
        height="82"
        src="/images/the-boston-globe-logo.png"
        alt="The Boston Globe"
      />
    </Col>

    <Col className="w-1/3 md:w-1/6">
      <Image
        width="108"
        height="106"
        src="/images/digital-trends-logo.png"
        alt="Digital Trends"
      />
    </Col>

    <Col className="w-1/3 md:w-1/6">
      <Image width="168" height="126" src="/images/abc-logo.png" alt="ABC" />
    </Col>
  </Row>
))

PressList.displayName = 'PressList'

export default PressList

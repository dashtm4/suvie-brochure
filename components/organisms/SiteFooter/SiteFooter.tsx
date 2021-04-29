import { FC, memo } from 'react'

import { SealLogo, FooterMenuTitle, Wave } from '@components/atoms'
import { FooterMenu, SocialMediaList } from '@components/molecules'
import { KlaviyoSubscriptionForm } from '@components/organisms'
import { Container, Row, Col } from '@components/containers'

import {
  FOOTER_MENU_1,
  FOOTER_MENU_2,
  FOOTER_MENU_3,
  FOOTER_COPY
} from '@temp/config'

import socialMedia from '@temp/static/social-media.json'

export interface ISiteFooterProps {}

export const SiteFooter: FC<ISiteFooterProps> = memo(() => (
  <footer className="relative bg-secondary mt-auto mb-0 pt-6 pb-5 md:pt-9 md:pb-12">
    <Wave />

    <Container>
      <Row className="mb-8">
        <Col className="w-full md:w-4/12 mb-10 md:mb-0 md:order-1">
          <KlaviyoSubscriptionForm />
          <SocialMediaList list={socialMedia} />
        </Col>
        <Col className="md:w-8/12 md:order-0">
          <Row>
            <Col className="w-full md:w-1/5 mb-10 md:mb-0">
              <SealLogo />
            </Col>
            <Col className="w-1/2 md:w-1/5 mb-4">
              <FooterMenuTitle>Suvie</FooterMenuTitle>
              <FooterMenu menu={FOOTER_MENU_1} />
            </Col>
            <Col className="w-1/2 md:w-1/5 mb-4">
              <FooterMenuTitle>Company</FooterMenuTitle>
              <FooterMenu menu={FOOTER_MENU_2} />
            </Col>
            <Col className="w-1/2 md:w-1/5 mb-4">
              <FooterMenuTitle>Support</FooterMenuTitle>
              <FooterMenu menu={FOOTER_MENU_3} />
            </Col>
          </Row>
        </Col>
      </Row>

      <p className="text-xs text-gray-600 ">{FOOTER_COPY}</p>
    </Container>
  </footer>
))

SiteFooter.displayName = 'SiteFooter'

export default SiteFooter

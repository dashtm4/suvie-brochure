import { FC, memo } from 'react'

import { SealLogo, Wave } from '@components/atoms'
import { Container } from '@components/containers'
import { FOOTER_COPY } from '@temp/config'

export interface ISimpleSiteFooterProps {}

export const SimpleSiteFooter: FC<ISimpleSiteFooterProps> = memo(() => (
  <footer className="relative text-center bg-secondary mt-auto mb-0 pt-10 pb-12 md:pt-20">
    <Wave />
    <Container>
      <div className="mb-10">
        <SealLogo />
      </div>

      <p className="text-xs text-gray-600">{FOOTER_COPY}</p>
    </Container>
  </footer>
))

SimpleSiteFooter.displayName = 'SimpleSiteFooter'

export default SimpleSiteFooter

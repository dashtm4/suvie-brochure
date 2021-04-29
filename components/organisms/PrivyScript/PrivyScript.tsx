import { FC, memo } from 'react'

import { PRIVY_ID } from '@temp/constants'

export interface IPrivyScriptProps {}

export const PrivyScript: FC<IPrivyScriptProps> = memo(() => (
  <>
    <script
      dangerouslySetInnerHTML={{
        __html: `var _d_site = _d_site || '${PRIVY_ID}';`
      }}
    />
    <script src="https://widget.privy.com/assets/widget.js" />
  </>
))

PrivyScript.displayName = 'PrivyScript'

export default PrivyScript

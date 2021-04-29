import { FC, memo } from 'react'
import Collapsible from 'react-collapsible'

export interface IPanelProps {
  title: string
  content: string
}

export const Panel: FC<IPanelProps> = memo(() => {
  return (
    <Collapsible trigger="Start here">
      <p>
        This is the collapsible content. It can be any element or React
        component you like.
      </p>
      <p>
        It can even be another Collapsible component. Check out the next
        section!
      </p>
    </Collapsible>
  )
})

Panel.displayName = 'Panel'

export default Panel

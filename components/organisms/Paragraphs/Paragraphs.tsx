import { FC, memo } from 'react'

export interface IParagraphsProps {
  children: string
}

export const Paragraphs: FC<IParagraphsProps> = memo(
  ({ children }: IParagraphsProps) => (
    <>
      {children?.split('\n').map((current, index) => (
        <p key={index} className="mb-2 last:mb-0">
          {current}
        </p>
      ))}
    </>
  )
)

Paragraphs.displayName = 'Paragraphs'

export default Paragraphs

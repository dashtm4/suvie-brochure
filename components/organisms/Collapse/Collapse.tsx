import { FC, memo } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import { useToggle } from '@hooks'

export interface ICollapseProps {
  title: string
  children: string
  className?: string
}

export const Collapse: FC<ICollapseProps> = memo(
  ({ title, children, className }: ICollapseProps) => {
    const [isExpanded, toggle] = useToggle(false)

    return (
      <div
        className={classNames(
          'py-7 md:py-8 border-b-2 border-secondary border-opacity-25 first:border-t-2',
          className
        )}
      >
        <h3 className="font-serif text-base font-normal text-black md:text-2xl">
          <button
            type="button"
            className="relative flex items-center justify-between w-full leading-snug text-left"
            onClick={toggle}
          >
            {title}
            <div className="flex-shrink-0 ml-2 opacity-25" role="presentation">
              <Image
                width="20"
                height="20"
                src={
                  isExpanded
                    ? '/images/minus-icon.svg'
                    : '/images/plus-icon.svg'
                }
                alt=""
              />
            </div>
          </button>
        </h3>
        <ReactMarkdown
          plugins={[gfm]}
          className={classNames('mt-3 article text-quinary', {
            hidden: !isExpanded
          })}
        >
          {children}
        </ReactMarkdown>
      </div>
    )
  }
)

Collapse.displayName = 'Collapse'

export default Collapse

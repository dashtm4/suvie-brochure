import { FC, memo } from 'react'
import Image from 'next/image'
import classNames from 'classnames'

import { Typography } from '@components/atoms'
import { Badge } from '@components/organisms'

import { IKitchenRobotHeroSideSectionContentProps } from './types'

export interface IKitchenRobotHeroSideSectionProps {
  className?: string
  item?: IKitchenRobotHeroSideSectionContentProps
}

export const KitchenRobotHeroSideSection: FC<IKitchenRobotHeroSideSectionProps> = memo(
  ({ className = '', item = null }: IKitchenRobotHeroSideSectionProps) => {
    return (
      <div
        className={classNames('flex-1 text-center md:order-none', className)}
      >
        {item?.iconSrc && (
          <Image
            width={item.iconSrc.width}
            height={item.iconSrc.height}
            src={item.iconSrc.src}
            alt="kitchen-robot-image"
          />
        )}

        <Typography theme="dark" variant="subtitle2" className="mb-2">
          <span className="font-normal">{item?.title?.pre}</span>
          <br className="hidden md:block" />{' '}
          <span className="font-medium">{item?.title?.bold}</span>
        </Typography>

        <Typography theme="dark" className="font-normal">
          {item?.content}
        </Typography>

        {item?.tag && (
          <Badge theme="dark" className="mt-3">
            <span className="text-xs">{item?.tag}</span>
          </Badge>
        )}
      </div>
    )
  }
)

KitchenRobotHeroSideSection.displayName = 'KitchenRobotHeroSideSection'

export default KitchenRobotHeroSideSection

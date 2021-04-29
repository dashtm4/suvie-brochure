import { FC, useRef, useState, memo } from 'react'
import classNames from 'classnames'
import Link from 'next/link'

import {
  ButtonLink,
  ProductCardBadge,
  ProductCardTitle,
  ProductCardImage,
  InfoIcon
} from '@components/atoms'
import { ProductCardProperties } from '@components/molecules'
import {
  PrequalifyNowLink,
  ProductModal,
  SmartMealsModal,
  Popover,
  Paragraphs
} from '@components/organisms'
import { IProduct, ISmartMeals } from 'types'
import { ACCESSORIES_URL, PATHS } from '@temp/config'
import { useToggle, useRoleButton } from '@hooks'

export interface IProductCardProps {
  product: IProduct
  smartMeals: ISmartMeals
}

export const ProductCard: FC<IProductCardProps> = memo(
  ({ product, smartMeals }: IProductCardProps) => {
    const ref = useRef<HTMLDivElement>(null)
    const infoIconButton = useRef<HTMLButtonElement>(null)
    const smartMealButtonRef = useRef<HTMLButtonElement>(null)
    const popoverRef = useRef<HTMLDivElement>(null)
    const buyNowLinkRef = useRef<HTMLAnchorElement>(null)
    const prequalifyNowLinkRef = useRef<HTMLAnchorElement>(null)

    const [shownModal, setIsShownModal] = useState<boolean>(false)

    const toggleModal = (event) => {
      if (
        event?.target !== smartMealButtonRef.current &&
        event?.target !== popoverRef.current &&
        !popoverRef.current?.contains(event?.target) &&
        event?.target !== infoIconButton.current &&
        !infoIconButton.current?.contains(event?.target) &&
        event?.target !== buyNowLinkRef.current &&
        event?.target !== prequalifyNowLinkRef.current
      ) {
        setIsShownModal((value) => !value)
      }
    }

    useRoleButton(ref, toggleModal)

    const [showSmartMealsModal, toggleSmartMealsModal] = useToggle(false)

    const [showPopover, togglePopover] = useToggle(false)

    return (
      <>
        <div
          ref={ref}
          className={classNames(
            'bg-white rounded-xl relative w-80 max-w-full pt-6 pb-4 px-4 cursor-pointer transition-shadow mx-auto hover:shadow-lg',
            { 'border-2 border-primary-default': product?.recommended }
          )}
          onClick={toggleModal}
        >
          {product?.recommended && (
            <ProductCardBadge>Most popular</ProductCardBadge>
          )}

          <ProductCardTitle>{product?.title}</ProductCardTitle>

          {product.image?.url && (
            <ProductCardImage
              imageSrc={product.image?.url}
              alt={product.title}
            />
          )}

          <ProductCardProperties
            title="Includes"
            properties={product?.includes}
            className="mb-3"
          />

          <ProductCardProperties
            title="Accessories"
            properties={product?.accessories}
            className="mb-3"
          />

          <ul className="mb-2 text-secondary">
            <li className="relative flex justify-between gap-2 py-2 border-b border-denary">
              <button
                ref={smartMealButtonRef}
                className="font-light underline"
                onClick={toggleSmartMealsModal}
              >
                Smart Meals
              </button>
              <span
                className={classNames('inline-flex gap-x-1', {
                  'text-primary-default font-normal': Boolean(
                    product?.smartMeals?.statusDescription
                  )
                })}
              >
                {product?.smartMeals?.status}

                {product?.smartMeals?.statusDescription && (
                  <button
                    ref={infoIconButton}
                    onClick={togglePopover}
                    onMouseEnter={togglePopover}
                  >
                    <InfoIcon width={20} height={20} colorHex="#c0c0c0" />
                  </button>
                )}
              </span>

              {showPopover && product?.smartMeals?.statusDescription && (
                <Popover forwardRef={popoverRef} toggle={togglePopover}>
                  <Paragraphs>
                    {product?.smartMeals?.statusDescription}
                  </Paragraphs>

                  <Link href={PATHS.FAQ}>
                    <a className="mt-2 underline text-primary-default">
                      Learn More
                    </a>
                  </Link>
                </Popover>
              )}
            </li>

            {product?.meta?.map((item, index) => (
              <li
                key={item?.name}
                className={classNames('flex justify-between gap-2 py-2', {
                  'border-b border-denary': index === 0
                })}
              >
                <span>{item?.name}</span>
                <span>{item?.value}</span>
              </li>
            ))}
          </ul>

          <div className="mb-3 text-center text-secondary">
            <div className="flex items-baseline justify-center font-serif text-2xl font-normal gap-x-2">
              {product?.price?.originalPrice && (
                <span
                  className="text-xl line-through"
                  style={{ color: '#6d6d6d' }}
                  aria-label="Deleted Original Price"
                >
                  ${product?.price?.originalPrice}
                </span>
              )}
              <span role="none">${product?.price?.price}</span>
            </div>
            <div className="font-serif text-2xl font-normal">
              ${product?.monthPrice?.price}/month*
            </div>
          </div>

          <ButtonLink
            btnRef={buyNowLinkRef}
            href={product?.link || ACCESSORIES_URL}
            isExternal={true}
            className="block max-w-full mx-auto mb-3 w-50"
          >
            Buy now
          </ButtonLink>

          <div className="max-w-full mx-auto text-center w-60 text-septenary">
            * {product?.note} Starting at 0% APR with Affirm.{' '}
            <PrequalifyNowLink forwardRed={prequalifyNowLinkRef} />
          </div>
        </div>

        {shownModal && (
          <ProductModal product={product} toggleModal={toggleModal} />
        )}

        {showSmartMealsModal && (
          <SmartMealsModal
            smartMeals={smartMeals}
            toggleModal={toggleSmartMealsModal}
          />
        )}
      </>
    )
  }
)

ProductCard.displayName = 'ProductCard'

export default ProductCard

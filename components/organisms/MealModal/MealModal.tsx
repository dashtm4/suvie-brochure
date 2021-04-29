import {
  FC,
  memo,
  MouseEvent,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import isEmpty from 'lodash/isEmpty'

import {
  MealModalPropertiesListItem,
  Button,
  ButtonLink
} from '@components/atoms'
import { MealModalPropertiesList } from '@components/molecules'
import { Badge, Modal, VideoPlayer } from '@components/organisms'
import { useWindowSize } from '@hooks'
import { IMeal } from '@temp/types'
import { PATHS } from '@temp/config'

export interface IMealModalProps {
  meal: IMeal
  toggleModal: (event: MouseEvent<HTMLElement>) => void
  gallery?: string[]
  showCTAButton?: boolean
}

export const MealModal: FC<IMealModalProps> = memo(
  ({ meal, toggleModal, showCTAButton = false }: IMealModalProps) => {
    const windowSize = useWindowSize()
    const [clientHeight, setClientHeight] = useState<number>(0)
    const galleryMobileHeight = 300

    const ref = useRef<HTMLDivElement | null>(null)
    const mealPropertiesListRef = useRef<HTMLUListElement>(null)

    useEffect(() => {
      if (ref.current?.clientHeight > 0) {
        setClientHeight(
          windowSize.width > 768
            ? ref.current.clientHeight -
                mealPropertiesListRef.current.clientHeight
            : galleryMobileHeight
        )
      }
    }, [ref, mealPropertiesListRef, windowSize.width, galleryMobileHeight])

    const isSmartMeal = meal?.type === 'smart meals'

    const badgeStyle = useMemo(
      () => ({
        backgroundColor: isSmartMeal ? '#424242' : '#d0A86e',
        border: 'none'
      }),
      [meal?.type]
    )

    const posterSrc = useMemo(
      () => (isEmpty(meal?.videoSrc) ? meal?.imageSrc : null),
      [meal?.videoSrc, meal?.imageSrc]
    )

    return (
      <Modal toggleModal={toggleModal}>
        <div ref={ref} className="md:flex" style={{ minHeight: '37rem' }}>
          <div
            className="relative bg-secondary md:w-1/2 md:order-1"
            style={{
              height: `${clientHeight}px`
            }}
          >
            <Badge
              theme="dark"
              className="absolute z-10 transform -translate-x-1/2 top-5 left-1/2 whitespace-nowrap md:hidden"
              style={badgeStyle}
            >
              {meal?.type}
            </Badge>

            {clientHeight > 0 && (
              <figure role="none" className="relative w-full h-full">
                <VideoPlayer
                  url={meal?.videoSrc}
                  poster={posterSrc}
                  autoplay={true}
                  controls={false}
                  loop={true}
                  muted={true}
                  playsInline={true}
                  className="absolute inset-0 object-cover w-full h-full"
                />
              </figure>
            )}

            <MealModalPropertiesList
              forwardRef={mealPropertiesListRef}
              className="hidden md:block md:text-white md:py-4 md:pb-7 md:px-4 bg-secondary"
            >
              <MealModalPropertiesListItem
                name="Calories"
                value={meal?.calories}
              />
              <MealModalPropertiesListItem
                name="Prep Time"
                value={meal?.prepTime}
              />
              <MealModalPropertiesListItem
                name="Meal Type"
                value={meal?.type}
              />
            </MealModalPropertiesList>
          </div>

          <div className="px-3 pt-4 pb-6 text-center md:text-left md:w-1/2 md:pt-25 md:pb-12 md:pl-8 md:pr-12 md:order-0">
            <Badge
              theme="dark"
              className="hidden md:inline-block md:mb-4"
              style={badgeStyle}
            >
              {meal?.type}
            </Badge>

            <h3
              className="mb-4 font-serif text-secondary"
              style={{ fontSize: '2rem' }}
            >
              {meal?.title}
            </h3>

            <div className="mb-6 text-quinary">
              {meal?.description ?? meal?.subtitle}
            </div>

            <MealModalPropertiesList className="mb-9 text-secondary md:hidden">
              <MealModalPropertiesListItem
                name="Calories"
                value={meal?.calories}
              />
              <MealModalPropertiesListItem
                name="Prep Time"
                value={meal?.prepTime}
              />
              <MealModalPropertiesListItem
                name="Meal Type"
                value={meal?.type}
              />
            </MealModalPropertiesList>

            {showCTAButton ? (
              <ButtonLink
                href={isSmartMeal ? PATHS.SMART_MEALS : PATHS.RECIPES}
                className="max-w-full mx-auto w-50 md:mx-0"
              >
                {isSmartMeal ? 'Explore Smart Meals' : 'View Recipe'}
              </ButtonLink>
            ) : (
              <Button
                theme="outline"
                className="max-w-full mx-auto w-50 md:mx-0"
                onClick={toggleModal}
              >
                Close Window
              </Button>
            )}
          </div>
        </div>
      </Modal>
    )
  }
)

MealModal.displayName = 'MealModal'

export default MealModal

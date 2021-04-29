import {
  FC,
  memo,
  MouseEvent,
  ReactNode,
  useEffect,
  useRef,
  useState
} from 'react'
import Carousel from 'nuka-carousel'
import Image from 'next/image'

import { CarouselPagination } from '@components/molecules'
import { Modal } from '@components/organisms'
import { useWindowSize } from '@hooks'

export interface IGalleryModalContentProps {
  children: ReactNode
  toggleModal: (event: MouseEvent<HTMLElement>) => void
  gallery?: string[]
}

export const GalleryModal: FC<IGalleryModalContentProps> = memo(
  ({ children, gallery, toggleModal }: IGalleryModalContentProps) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const windowSize = useWindowSize()
    const [clientHeight, setClientHeight] = useState<number>(0)
    const galleryMobileHeight = 300

    useEffect(() => {
      if (ref.current?.clientHeight > 0) {
        setClientHeight(
          windowSize.width > 768
            ? ref.current.clientHeight
            : galleryMobileHeight
        )
      }
    }, [ref, setClientHeight, windowSize.width, galleryMobileHeight])

    return (
      <Modal toggleModal={toggleModal}>
        <div ref={ref} className="md:flex" style={{ minHeight: '37rem' }}>
          <div
            className="bg-secondary md:w-1/2 md:order-1"
            style={{
              height: `${clientHeight}px`
            }}
          >
            {clientHeight > 0 && gallery?.length > 1 ? (
              <Carousel
                initialSlideHeight={clientHeight}
                renderCenterLeftControls={null}
                renderCenterRightControls={null}
                renderBottomCenterControls={({
                  slideCount,
                  currentSlide,
                  goToSlide
                }) => (
                  <CarouselPagination
                    slideCount={slideCount}
                    currentSlide={currentSlide}
                    goToSlide={goToSlide}
                    theme="dark"
                    className="pb-6"
                  />
                )}
              >
                {gallery.map((imageSrc) => (
                  <div
                    key={imageSrc}
                    style={{
                      height: `${clientHeight}px`
                    }}
                  >
                    <Image
                      src={imageSrc}
                      layout="fill"
                      objectFit="cover"
                      alt=""
                    />
                  </div>
                ))}
              </Carousel>
            ) : (
              <div
                className="relative w-full"
                style={{
                  height: `${clientHeight}px`
                }}
              >
                <Image
                  src={gallery?.[0] ?? ''}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            )}
          </div>

          <div className="py-8 px-3 md:w-1/2 md:py-12 md:pl-8 md:pr-12 md:order-0 md:flex md:flex-col md:justify-center">
            {children}
          </div>
        </div>
      </Modal>
    )
  }
)

GalleryModal.displayName = 'GalleryModal'

export default GalleryModal

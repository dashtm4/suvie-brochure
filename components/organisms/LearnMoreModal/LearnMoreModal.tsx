import { FC, memo, MouseEvent } from 'react'

import { VideoModal } from '@components/organisms'
import { Button } from '@components/atoms'

export interface ILearnMoreModalProps {
  title: string
  description: string
  posterSrc: string
  videoSrc: string
  toggleModal: (event: MouseEvent<HTMLElement>) => void
}

export const LearnMoreModal: FC<ILearnMoreModalProps> = memo(
  ({
    title,
    description,
    posterSrc,
    videoSrc,
    toggleModal
  }: ILearnMoreModalProps) => (
    <VideoModal
      videoSrc={videoSrc}
      posterSrc={posterSrc}
      toggleModal={toggleModal}
    >
      <h3
        className="mb-4 font-serif font-normal text-center text-secondary md:text-left"
        style={{ fontSize: '2rem' }}
      >
        {title}
      </h3>

      <div className="mb-4 text-center text-quinary md:text-left">
        {description}
      </div>

      <Button
        theme="outline"
        className="hidden mx-auto max-w-full md:inline-block w-50 md:mx-0"
        onClick={toggleModal}
      >
        Close window
      </Button>
    </VideoModal>
  )
)

LearnMoreModal.displayName = 'LearnMoreModal'

export default LearnMoreModal

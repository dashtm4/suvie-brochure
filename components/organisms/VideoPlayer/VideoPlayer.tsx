import { createRef, FC, memo, RefObject, useEffect } from 'react'
import Hls from 'hls.js'

export interface IVideoPlayerProps {
  url: string
  poster?: string
  autoplay?: boolean
  controls?: boolean
  loop?: boolean
  playsInline?: boolean
  muted?: boolean
  width?: string
  height?: string
  hlsConfig?: Record<string, any>
  playerRef?: RefObject<HTMLVideoElement>
  style?: Record<string, any>
  className?: string
}

export const VideoPlayer: FC<IVideoPlayerProps> = memo(
  ({
    url,
    poster,
    autoplay = false,
    controls = false,
    loop = false,
    playsInline = false,
    muted = false,
    width,
    height,
    hlsConfig = {},
    playerRef = createRef(),
    style = {},
    className
  }: IVideoPlayerProps) => {
    useEffect(() => {
      let hls = null

      const _initPlayer = () => {
        if (hls != null) {
          hls.destroy()
        }

        const newHls = new Hls({
          enableWorker: false,
          ...hlsConfig
        })

        newHls.attachMedia(playerRef.current)

        newHls.on(Hls.Events.MEDIA_ATTACHED, () => {
          newHls.loadSource(url)

          newHls.on(Hls.Events.MANIFEST_PARSED, () => {
            if (autoplay) {
              playerRef.current?.play()?.catch()
            }
          })
        })

        newHls.on(Hls.Events.ERROR, (event, data) => {
          if (data.fatal) {
            switch (data.type) {
              case Hls.ErrorTypes.NETWORK_ERROR:
                newHls.startLoad()
                break
              case Hls.ErrorTypes.MEDIA_ERROR:
                newHls.recoverMediaError()
                break
              default:
                _initPlayer()
                break
            }
          }
        })

        hls = newHls
      }

      if (url.includes('.m3u8')) {
        _initPlayer()
      }

      return () => {
        if (hls != null) {
          hls.destroy()
        }
      }
    }, [autoplay, hlsConfig, playerRef, url])

    return (
      <video
        ref={playerRef}
        src={url}
        poster={poster}
        autoPlay={autoplay}
        controls={controls}
        loop={loop}
        playsInline={playsInline}
        muted={muted}
        width={width}
        height={height}
        style={style}
        className={className}
      />
    )
  }
)

VideoPlayer.displayName = 'VideoPlayer'

export default VideoPlayer

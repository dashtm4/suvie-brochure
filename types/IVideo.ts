import { IMedia } from '@types'

export interface IVideo {
  /* eslint-disable camelcase */
  video_url: string
  video_description?: string
  video_poster?: IMedia
  video_name?: string
  /* eslint-enable camelcase */
}

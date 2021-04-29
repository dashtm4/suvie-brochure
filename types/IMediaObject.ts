import { IMedia, ITitle, IVideo } from '@types'

export interface IMediaObject {
  /* eslint-disable camelcase */
  mo_title_fields?: ITitle
  mo_video: IVideo
  mo_icon?: IMedia
  mo_label?: string
  /* eslint-enable camelcase */
}

import { FC, memo } from 'react'

import { DefaultHero } from '@components/organisms'
import { Container } from '@components/containers'

export interface IJobsTemplateProps {}

export const JobsTemplate: FC<IJobsTemplateProps> = memo(() => (
  <main>
    <DefaultHero title="Jobs" />
    <Container className="py-20" />
  </main>
))

JobsTemplate.displayName = 'JobsTemplate'

export default JobsTemplate

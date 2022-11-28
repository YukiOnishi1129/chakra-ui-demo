import { ComponentMeta, ComponentStory } from '@storybook/react'

import { AlertBar } from '.'

export default {
  title: 'common/AlertBar',
  component: AlertBar,
} as ComponentMeta<typeof AlertBar>

const Template: ComponentStory<typeof AlertBar> = (args) => <AlertBar {...args} />

export const Primary = Template.bind({})
Primary.args = {
  title: 'info',
  description: 'info description',
}

export const Success = Template.bind({})
Success.args = {
  status: 'success',
  title: 'success',
  description: 'success description',
}

export const Warning = Template.bind({})
Warning.args = {
  status: 'warning',
  title: 'warning',
  description: 'warning description',
}

export const Error = Template.bind({})
Error.args = {
  status: 'error',
  title: 'error',
  description: 'error description',
}

export const Loading = Template.bind({})
Loading.args = {
  status: 'loading',
  title: 'loading',
  description: 'loading description',
}

import { ComponentMeta, ComponentStory } from '@storybook/react'

import { AlertModal } from '.'

export default {
  title: 'common/AlertModal',
  component: AlertModal,
} as ComponentMeta<typeof AlertModal>

const Template: ComponentStory<typeof AlertModal> = (args) => <AlertModal {...args} />

export const Primary = Template.bind({})
Primary.args = {
  isOpen: true,
  title: 'サンプルサンプルサンプルサンプルサンプルサンプル',
  description:
    'OKしますか？OKしますか？OKしますか？OKしますか？OKしますか？OKしますか？OKしますか？OKしますか？',
}

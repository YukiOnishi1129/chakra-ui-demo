import { Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'
import { ComponentProps, FC } from 'react'

type Props = ComponentProps<typeof Alert> & {
  title: string
  description: string
}

/**
 * AlertBar
 * @param param0
 * @returns
 */
export const AlertBar: FC<Props> = ({ status, title, description }) => (
  <Alert status={status}>
    <AlertIcon />
    <AlertTitle>{title}</AlertTitle>
    <AlertDescription>{description}</AlertDescription>
  </Alert>
)

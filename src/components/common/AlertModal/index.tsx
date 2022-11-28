import {
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from '@chakra-ui/react'
import { ComponentProps, FC, useRef } from 'react'

type Props = ComponentProps<typeof AlertDialog> & {
  title: string
  description: string
  cancelButtonLabel?: string
  executeButtonLabel?: string
  onExecute?: () => void
}

export const AlertModal: FC<Props> = ({
  isOpen,
  title,
  description,
  cancelButtonLabel = 'キャンセル',
  executeButtonLabel = 'OK',
  onExecute,
  onClose,
}) => {
  const cancelRef = useRef<HTMLButtonElement>(null)
  return (
    <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            {title}
          </AlertDialogHeader>

          <AlertDialogBody>{description}</AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              {cancelButtonLabel}
            </Button>
            <Button colorScheme='red' onClick={onExecute} ml={3}>
              {executeButtonLabel}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}

import { Box, Button, Heading, Text } from '@chakra-ui/react'

const Home = () => (
  <Box width={'200px'} background='gray'>
    <Text color={'blue'} fontWeight={'bold'}>
      テキスト
    </Text>
    <Heading>見出し</Heading>
    <Button>ボタン</Button>
    {/* <Alert status='error'>
      <AlertIcon />
      <AlertTitle>タイトル</AlertTitle>
      <AlertDescription>説明</AlertDescription>
    </Alert> */}
  </Box>
)

export default Home

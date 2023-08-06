import { ConnectWallet } from "@3rdweb-sdk/react/components/connect-wallet";
import { Container, Divider, Flex } from "@chakra-ui/react";
import { Card, Heading, Text } from "tw-components";

export default function RequireAuth() {
  return (
    <Container maxW="lg">
      <Card p={6} as={Flex} flexDir="column" gap={2}>
        <Heading as="h2" size="title.sm">
          Connect your wallet to get started
        </Heading>
        <Text>
          In order to create and manage your developer API keys, you need to
          sign-in with a wallet.
        </Text>
        <Divider my={4} />
        <ConnectWallet ecosystem="evm" />
      </Card>
    </Container>
  );
}

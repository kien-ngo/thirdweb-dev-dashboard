import { Box, Container, Flex, Icon, IconButton } from "@chakra-ui/react";
import { useLocalStorage } from "hooks/useLocalStorage";
import { FiArrowRight, FiX } from "react-icons/fi";
import { Heading, TrackedLink } from "tw-components";

export const AnnouncementBanner = () => {
  const [hasDismissedAnnouncement, setHasDismissedAnnouncement] =
    useLocalStorage("dismissed-smart-w-allet", false, true);

  if (hasDismissedAnnouncement) {
    return null;
  }

  return (
    <Box
      position="sticky"
      zIndex="10"
      py={3}
      bgImage="linear-gradient(145.96deg, #410AB6 5.07%, #7bdefe 100%)"
    >
      <Flex
        w="full"
        justifyContent="space-between"
        alignItems="center"
        gap={{ base: 1, md: 2 }}
        px={4}
      >
        <Box display={{ base: "none", md: "block" }} />
        <TrackedLink
          isExternal
          href="/account-abstraction"
          category="announcement"
          label="smart-wallet"
        >
          <Container maxW="container.page" display="flex" px={0}>
            <Flex
              cursor="pointer"
              mx="auto"
              align="center"
              gap={{ base: 0.5, md: 2 }}
              color="white"
            >
              <Heading
                size="label.lg"
                as="p"
                lineHeight={{ base: 1.5, md: undefined }}
                color="white"
                fontWeight={500}
              >
                Introducing: The most complete toolkit for account abstraction.
                Build web3 apps with ERC-4337
              </Heading>
              <Icon display={{ base: "none", md: "block" }} as={FiArrowRight} />
            </Flex>
          </Container>
        </TrackedLink>

        <IconButton
          size="xs"
          aria-label="Close announcement"
          icon={<FiX />}
          colorScheme="blackAlpha"
          color={{ base: "white", md: "black" }}
          variant="ghost"
          onClick={() => setHasDismissedAnnouncement(true)}
        />
      </Flex>
    </Box>
  );
};

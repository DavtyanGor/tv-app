import { Box, HStack, Text, Avatar } from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
};

export default function UserProfile({ isOpen }: Props) {
  return (
    <Box px={4} mb={20} mt={4}>
      <HStack gap={4}>
        <Avatar.Root
          size="xl"
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
          opacity={isOpen ? 1 : 0}
          colorPalette="teal"
        >
          <Avatar.Fallback name="Daniel" />
          <Avatar.Image src="https://avatars.mds.yandex.net/i?id=fbf79430b8710a70a052e8bd05ca259e04890d82-5317467-images-thumbs&n=13" />
        </Avatar.Root>
        <Text
          fontWeight="bold"
          fontSize="2xl"
          whiteSpace="nowrap"
          opacity={isOpen ? 1 : 0}
          transition="opacity 0.3s ease"
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
        >
          Daniel
        </Text>
      </HStack>
    </Box>
  );
}

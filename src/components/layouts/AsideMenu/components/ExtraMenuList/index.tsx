import { VStack, HStack, Text } from "@chakra-ui/react";

type ExtraMenuItem = {
  label: string;
};

type Props = {
  items: ExtraMenuItem[];
  isOpen: boolean;
};

export default function ExtraMenuList({ items, isOpen }: Props) {
  return (
    <VStack px={10}>
      {items.map(({ label }) => (
        <HStack gap={4} key={label} cursor="pointer" w="full">
          <Text
            color={"gray.600"}
            fontSize={"lg"}
            whiteSpace="nowrap"
            fontWeight={"bold"}
            opacity={isOpen ? 1 : 0}
            transition="opacity 0.3s ease"
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
          >
            {label}
          </Text>
        </HStack>
      ))}
    </VStack>
  );
}

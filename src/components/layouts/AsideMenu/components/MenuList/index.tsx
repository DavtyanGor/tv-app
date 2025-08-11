import { HStack, Image, Text } from "@chakra-ui/react";
import type { MenuListProps } from "./types";

export default function MenuList({
  items,
  isOpen,
  activeTab,
  onTabChange,
}: MenuListProps) {
  return (
    <>
      {items.map(({ iconSrc, label }) => {
        const isActive = activeTab === label;
        return (
          <HStack
            mt={5}
            gap={6}
            key={label}
            cursor="pointer"
            w={isOpen ? "full" : "40px"}
            pl={2}
            borderRadius={"xl"}
            bg={isActive ? "gray.500" : "transparent"}
            onClick={() => onTabChange(label)}
            _hover={{ bg: isActive ? "gray.500" : "blue.700" }}
            transition="background-color 0.3s ease"
          >
            <Image
              boxSize="24px"
              objectFit="contain"
              src={iconSrc}
              alt={label}
            />
            <Text
              fontSize="2xl"
              fontWeight={"bold"}
              whiteSpace="nowrap"
              opacity={isOpen ? 1 : 0}
              transition="opacity 0.3s ease"
              style={{ pointerEvents: isOpen ? "auto" : "none" }}
            >
              {label}
            </Text>
          </HStack>
        );
      })}
    </>
  );
}

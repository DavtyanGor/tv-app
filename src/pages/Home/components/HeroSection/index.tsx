import {
  Box,
  Heading,
  Text,
  HStack,
  Button,
  VStack,
  Badge,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { HeroSectionProps } from "./types";

const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);

export default function HeroSection({ movie }: HeroSectionProps) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    setShowVideo(false);
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [movie]);

  const durationSec = parseInt(movie.Duration, 10);
  const minutes = Math.floor(durationSec / 60);
  const hours = Math.floor(minutes / 60);
  const remMinutes = minutes % 60;
  const durationStr = `${hours > 0 ? hours + "h " : ""}${remMinutes}m`;

  return (
    <Box
      position="relative"
      height="80vh"
      backgroundImage={`url('${movie.CoverImage}')`}
      backgroundSize="cover"
      backgroundPosition="center"
      color="white"
      px={10}
      display="flex"
      alignItems="center"
      left={0}
    >
      {showVideo ? (
        <video
          autoPlay
          muted
          playsInline
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            left: "0",
          }}
          src={movie.VideoUrl}
        />
      ) : (
        <Box
          position="absolute"
          w="full"
          h="full"
          backgroundImage={`url('${movie.CoverImage}')`}
          backgroundSize="cover"
          backgroundPosition="center"
          left={0}
        />
      )}
      <Box
        position="absolute"
        left="0"
        top="0"
        w="full"
        h="full"
        bgGradient="linear(to-r, black 40%, transparent)"
      />

      <VStack
        align="flex-start"
        gap={4}
        position="relative"
        zIndex={1}
        maxW="600px"
        ml={"20"}
        mb={"20"}
      >
        <Badge
          background={"transparent"}
          fontSize="2xl"
          color={"gray.700"}
          mb={5}
        >
          {movie.Category}
        </Badge>
        <MotionHeading
          fontSize="6xl"
          fontWeight="bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {movie.Title}
        </MotionHeading>

        <MotionText
          fontSize="2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <HStack fontSize="lg" gap={4} mt={4}>
            <Text>{movie.ReleaseYear}</Text>
            <Text>{movie.MpaRating}</Text>
            <Text>{durationStr}</Text>
          </HStack>
          {movie.Description}
        </MotionText>

        <HStack gap={4} mt={4}>
          <MotionButton
            size="lg"
            px={10}
            colorScheme="whiteAlpha"
            borderRadius={"4xl"}
            bg="white"
            color="black"
            _hover={{ bg: "gray.200" }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            ▶ Play
          </MotionButton>
          <MotionButton
            size="lg"
            px={10}
            colorScheme="blue"
            borderRadius={"4xl"}
            bg="blue.700"
            _hover={{ bg: "blue.600" }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            More Info
          </MotionButton>
        </HStack>
      </VStack>
    </Box>
  );
}

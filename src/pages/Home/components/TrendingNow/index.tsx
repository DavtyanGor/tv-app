import { Box, Image, Text, VStack } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import type { TendingNowProps } from "./types";

export default function TrendingNow({ movies, onSelect }: TendingNowProps) {
  const moviesToShow = movies.slice(0, 50);

  return (
    <Box px={10}>
      <Text fontSize="2xl" color="white" fontWeight="bold" mb={4}>
        Trending Now
      </Text>

      <Swiper
        slidesPerView={8}
        spaceBetween={16}
        slidesPerGroup={8}
        style={{ paddingBottom: "20px" }}
      >
        {moviesToShow.map((movie) => (
          <SwiperSlide key={movie.Id} style={{ cursor: "pointer" }}>
            <VStack
              onClick={() => onSelect(movie)}
              gap={2}
              align="stretch"
              userSelect="none"
            >
              <Image
                src={movie.CoverImage}
                alt={movie.Title}
                borderRadius="md"
                boxShadow="md"
                maxH="225px"
                objectFit="cover"
              />
            </VStack>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

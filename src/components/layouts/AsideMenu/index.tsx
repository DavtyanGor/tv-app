import { useState } from "react";
import { Box, VStack } from "@chakra-ui/react";
import searchIcon from "../../../assets/search.png";
import homeIcon from "../../../assets/home.png";
import tvIcon from "../../../assets/tv.png";
import moviesIcon from "../../../assets/movies.png";
import genresIcon from "../../../assets/genres.png";
import watchLaterIcon from "../../../assets/watch_later.png";
import MenuList from "./components/MenuList";
import ExtraMenuList from "./components/ExtraMenuList";
import UserProfile from "./components/UserProfile";

const mainMenuItems = [
  { iconSrc: searchIcon, label: "Search" },
  { iconSrc: homeIcon, label: "Home" },
  { iconSrc: tvIcon, label: "TV Shows" },
  { iconSrc: moviesIcon, label: "Movies" },
  { iconSrc: genresIcon, label: "Genres" },
  { iconSrc: watchLaterIcon, label: "Watch Later" },
];

const additionalMenuItems = [
  { label: "Language" },
  { label: "Get Help" },
  { label: "Exit" },
];

export default function AsideMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      height="100vh"
      bg={isOpen ? "rgba(0,0,0,0.8)" : "transparent"}
      width={isOpen ? "220px" : "60px"}
      color="white"
      transition="all 0.3s ease"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      zIndex={1000}
      overflow="hidden"
      paddingY={4}
    >
      <UserProfile isOpen={isOpen} />
      <VStack gap={4} align="start" px={5} flexGrow={1}>
        <MenuList
          items={mainMenuItems}
          isOpen={isOpen}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </VStack>
      <ExtraMenuList items={additionalMenuItems} isOpen={isOpen} />
    </Box>
  );
}

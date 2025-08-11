import { useEffect, useState } from "react";
import TrendingNow from "./components/TrendingNow";
import data from "../../../data.json";
import HeroSection from "./components/HeroSection";
import type { Movie } from "./types";

export default function Home() {
  const [sortedMovies, setSortedMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie>(data.Featured);

  useEffect(() => {
    const watchedIdsString = sessionStorage.getItem("watchedMovies");
    let watchedIds: string[] = watchedIdsString
      ? JSON.parse(watchedIdsString)
      : [];

    const trendingMovies: Movie[] = data.TendingNow.slice(0, 50);

    const sorted = [...trendingMovies].sort((a, b) => {
      const aIndex = watchedIds.indexOf(a.Id);
      const bIndex = watchedIds.indexOf(b.Id);

      if (aIndex === -1 && bIndex === -1) return 0;
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    });

    setSortedMovies(sorted);

    if (watchedIds.length > 0) {
      const lastWatched = trendingMovies.find((m) => m.Id === watchedIds[0]);
      if (lastWatched) {
        setSelectedMovie(lastWatched);
      }
    }
  }, []);

  const handleSelectMovie = (movie: any) => {
    setSelectedMovie(movie);

    const watchedIdsString = sessionStorage.getItem("watchedMovies");
    let watchedIds: string[] = watchedIdsString
      ? JSON.parse(watchedIdsString)
      : [];

    watchedIds = watchedIds.filter((id) => id !== movie.Id);
    watchedIds.unshift(movie.Id);

    if (watchedIds.length > 10) {
      watchedIds = watchedIds.slice(0, 10);
    }

    sessionStorage.setItem("watchedMovies", JSON.stringify(watchedIds));
  };

  return (
    <>
      <HeroSection movie={selectedMovie} />
      <TrendingNow movies={sortedMovies} onSelect={handleSelectMovie} />
    </>
  );
}

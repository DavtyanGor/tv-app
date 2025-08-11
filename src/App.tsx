import "./App.css";
import AsideMenu from "./components/layouts/AsideMenu";
import Home from "./pages/Home";
import data from "../data.json";
import { useState, useEffect } from "react";
import TrendingNow from "./pages/TrendingNow";

type Movie = {
  Id: string;
  Title: string;
  CoverImage: string;
  ReleaseYear: string;
  MpaRating: string;
  Duration: string; // в секундах
  Description: string;
  Category: string;
  VideoUrl?: string;
  TitleImage: string;
};

function App() {
  const [sortedMovies, setSortedMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie>(data.Featured);

  useEffect(() => {
    // 1. Читаем из sessionStorage
    const watchedIdsString = sessionStorage.getItem("watchedMovies");
    let watchedIds: string[] = watchedIdsString
      ? JSON.parse(watchedIdsString)
      : [];

    const trendingMovies: Movie[] = data.TendingNow.slice(0, 50);

    // 2. Сортируем
    const sorted = [...trendingMovies].sort((a, b) => {
      const aIndex = watchedIds.indexOf(a.Id);
      const bIndex = watchedIds.indexOf(b.Id);

      if (aIndex === -1 && bIndex === -1) return 0;
      if (aIndex === -1) return 1;
      if (bIndex === -1) return -1;
      return aIndex - bIndex;
    });

    setSortedMovies(sorted);

    // 3. Ставим последний просмотренный фильм в HeroSection
    if (watchedIds.length > 0) {
      const lastWatched = trendingMovies.find((m) => m.Id === watchedIds[0]);
      if (lastWatched) {
        setSelectedMovie(lastWatched);
      }
    }
  }, []);

  const handleSelectMovie = (movie: any) => {
    setSelectedMovie(movie);

    // Обновляем только sessionStorage, без сортировки сейчас
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
      <AsideMenu />
      <Home movie={selectedMovie} />
      <TrendingNow movies={sortedMovies} onSelect={handleSelectMovie} />
    </>
  );
}

export default App;

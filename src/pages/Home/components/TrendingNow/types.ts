type Movie = {
  Id: string;
  Title: string;
  CoverImage: string;
  ReleaseYear: string;
  MpaRating: string;
  Category: string;
};

export type TendingNowProps = {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
};

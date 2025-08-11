type Movie = {
  Title: string;
  CoverImage: string;
  ReleaseYear: string;
  MpaRating: string;
  Duration: string;
  Description: string;
  Category: string;
  VideoUrl?: string;
  TitleImage: string;
};

export type HeroSectionProps = {
  movie: Movie;
};

import ListSection from "../../components/ListSection";
import MainContentSection from "../../components/MainContentSection";
import { RootState } from "../../store";

export function HomePage({ home, movie, tvShow }: RootState) {
  const { trendingShows } = home;
  const { popular: popularMovies } = movie;
  const { popular: popularTvShows } = tvShow;

  return (
    <>
      <MainContentSection shows={[...trendingShows.items.slice(0, 5)]} />
      <ListSection title="Trending" shows={[...trendingShows.items]} />
      <ListSection title="Popular Movies" shows={[...popularMovies.items]} />
      <ListSection
        title="Popular Tv Series"
        shows={[...popularTvShows.items]}
      />
    </>
  );
}

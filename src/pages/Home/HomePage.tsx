import { useMemo } from "react";
import ListSection from "../../components/ListSection";
import MainContentSection from "../../components/MainContentSection";
import { RootState } from "../../store";
import IShow from "../../core/interfaces/IShow";

export function HomePage({ home, movie, tvShow }: RootState) {
  const { trendingShows } = home;

  const trendingShowsSliced: IShow[] = useMemo(() => {
    return [...home.trendingShows.items.slice(0, 5)];
  }, [home.trendingShows]);

  const { popular: popularMovies, topRated: topRatedMovies } = movie;
  const { popular: popularTvShows } = tvShow;

  return (
    <>
      <MainContentSection shows={trendingShowsSliced} />
      <ListSection title="Trending Shows" shows={trendingShows.items} />
      <ListSection title="Popular Movies" shows={popularMovies.items} />
      <ListSection title="Top Rated Movies" shows={topRatedMovies.items} />
      <ListSection title="Popular Tv Series" shows={popularTvShows.items} />
    </>
  );
}

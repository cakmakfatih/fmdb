import ListSection from "../../components/ListSection";
import { HomeState } from "../../store/HomeStore/homeSlice";
import MainContentSection from "../../components/MainContentSection";

export function HomePage({
  trendingShows,
  popularMovies,
  popularSeries,
}: HomeState) {
  return (
    <>
      <MainContentSection shows={[...trendingShows.items.slice(0, 5)]} />
      <ListSection title="Trending" shows={trendingShows.items} />
      <ListSection title="Popular Movies" shows={popularMovies.items} />
      <ListSection title="Popular Tv Series" shows={popularSeries.items} />
    </>
  );
}

import ListSection from "../../components/ListSection";
import { connect } from "react-redux";
import { RootState } from "../../store";
import { HomeState } from "../../store/HomeStore/homeSlice";
import MainContentSection from "../../components/MainContentSection";

function mapStateToProps(state: RootState): HomeState {
  return state.home;
}

function HomePage(props: HomeState) {
  const { trendingShows } = props;

  return (
    <>
      <MainContentSection shows={[...trendingShows.items.slice(0, 5)]} />
      <ListSection title="Trending" shows={trendingShows.items} />
    </>
  );
}

export default connect(mapStateToProps)(HomePage);

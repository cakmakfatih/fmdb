import ListSection from "../../components/ListSection";
import { connect } from "react-redux";
import { RootState } from "../../store";
import { HomeState } from "../../store/HomeStore/homeSlice";
import MainContentSection from "../../components/MainContentSection";

function mapStateToProps(state: RootState): HomeState {
  return state.home;
}

function HomePage(props: HomeState) {
  const { popularShows } = props;

  return (
    <>
      <MainContentSection shows={[...popularShows.items.slice(0, 5)]} />
      <ListSection title="Upcoming" />
      <ListSection title="Trending" />
      <ListSection title="Popular" />
      <ListSection title="Top Rated" />
    </>
  );
}

export default connect(mapStateToProps)(HomePage);

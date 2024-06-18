import { connect } from "react-redux";
import { RootState } from "../../store";
import { HomeState } from "../../store/HomeStore/homeSlice";
import { HomePage } from "./HomePage";

function mapStateToProps(state: RootState): HomeState {
  return state.home;
}

const Home = connect(mapStateToProps)(HomePage);

export default Home;

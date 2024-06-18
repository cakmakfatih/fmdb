import { connect } from "react-redux";
import { RootState } from "../../store";
import { HomePage } from "./HomePage";

function mapStateToProps(state: RootState): RootState {
  return state;
}

const Home = connect(mapStateToProps)(HomePage);

export default Home;

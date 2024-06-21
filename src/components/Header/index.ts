import { connect } from "react-redux";
import { HeaderComponent } from "./HeaderComponent.1";
import { RootState } from "../../store";
import { MainState } from "../../store/MainStore/MainState";

function mapStateToProps(state: RootState): MainState {
  return state.main;
}

const HeaderContainer = connect(mapStateToProps)(HeaderComponent);
export default HeaderContainer;

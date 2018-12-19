import * as React from "react";
import { NameEditComponent } from "./nameEdit";
import { connect } from "react-redux";
import { State } from "../../reducers";
import { updateUserProfileName } from "../../actions/index";

const mapStateToProps = (state: State) => ({
  userName: state.userProfileReducer.firstName
});

const mapDispatchToProps = dispatch => ({
  onChange: (name: string) => dispatch(updateUserProfileName(name))
});

export const NameEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NameEditComponent);

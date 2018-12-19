import * as React from "react";
import { HelloWorldComponent } from "./helloWorld";
import { connect } from "react-redux";
import { State } from "../../reducers";

const mapStateToProps = (state: State) => ({
  userName: state.userProfileReducer.firstName
});

const mapDispatchToProps = dispatch => ({});

export const HelloWorldContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(HelloWorldComponent);

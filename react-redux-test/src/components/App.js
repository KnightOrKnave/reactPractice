import React from "react";
import { connect } from "react-redux";
import { addcounter } from "../actions";
import _ from "lodash";
import Counter from "./counter";

class App extends React.Component {
  render() {
    const props=this.props;
    return (
      <React.Fragment>
        {
          _.map(props.counters,c=><Counter id={c.id}/>)
        }
        <button onClick={props.addcounter}>Add Counter</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  counters:  state.count.array
});

const mapDispatchToProps = dispatch => ({
  addcounter: () => dispatch(addcounter())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

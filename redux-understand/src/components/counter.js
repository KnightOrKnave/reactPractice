import React from "react";
import { connect } from "react-redux";
import { add, addadd } from "../actions";

class Counter extends React.Component {


  onAdd(id){
    this.props.add(id);
  }

  render() {
    const props = this.props;
    console.log(props);
    return (
      <div>
        <h1>Test:{props.array[props.id].value}</h1>
        <button onClick={id=>this.onAdd(props.id)}>add!</button>
        <button onClick={props.addadd}>add!!!!!</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  value: state.count.value,
  value2: state.count2.value1,
  array: state.count.array
});
const mapDispatchToProps = dispatch => ({
  add: (id) => dispatch(add(id)),
  addadd: () => dispatch(addadd())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);

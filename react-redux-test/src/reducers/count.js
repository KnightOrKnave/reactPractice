import { ADD, ADDCOUNTER } from "../actions";

const initialState = { value: 0, array: [{id:0,value:0}] };

export default (state = initialState, action) => {
  //console.log(state);
  switch (action.type) {
    case ADD:
        console.log(action.id);
        state.array[action.id].value++;
      return { value: state.value + 1, array: state.array };
    case ADDCOUNTER:
        console.log(state);
      return { value: state.value, array: state.array.concat({id:state.array.length,value:0}) };
    default:
      return state;
  }
};

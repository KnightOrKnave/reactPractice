export const ADD = "ADD";
export const ADDCOUNTER = "ADDCOUNTER";
export const ADD2 = "ADD2";

//export const add = id => dispatch => {
//  console.log(id);
//  dispatch({ type: ADD, id });
//};

export const add = (id) => ({
  type: ADD,
  id:id
});

export const addadd = () => ({
  type: ADD2
});

export const addcounter = () => ({
  type: ADDCOUNTER
});

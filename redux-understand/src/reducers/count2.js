import {ADD2} from "../actions";

const initialState={value1:0,value2:10}

export default(state=initialState,action)=>{
    //console.log(state);
    switch (action.type){
        case ADD2:
            return {value1:state.value1+1,value2:state.value2**2}
        default:
            return state
    }

}
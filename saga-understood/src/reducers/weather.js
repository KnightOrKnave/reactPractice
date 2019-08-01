import {TEST,TEST2} from '../actions';

const initialState={value:0}

export default (state=initialState,action)=>{
    switch(action.type){
        case TEST:
            return {value:state.value+1};

        case TEST2:
            return {value:state.value=action.id}

        default:
            return state;
    }
}
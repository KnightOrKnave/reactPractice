import {TEST,TEST2} from '../actions';

const initialState={value:0}

export default (state=initialState,action)=>{
    switch(action.type){

        case TEST2:
            return {value:action.id}
        case TEST:
        default:
            return state;
    }
}
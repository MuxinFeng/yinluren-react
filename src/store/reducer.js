import {SWITCH_MENUS} from './actionTypes';

const defaultState = {
    current:'political',
}

export default (state = defaultState,action)=>{  
    if(action.type === SWITCH_MENUS){
        let newState = JSON.parse(JSON.stringify(state)) 
        newState.current = action.value;
        return newState
    }
    return state
}


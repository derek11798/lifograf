import * as Actions from "../actions/constants"

const initialState = {
    authToken : "",
    userId : ""
}

const commonState = (state=initialState, action)=>{
    switch(action.type){
        case Actions.authToken :
            return {
                ...state,
                authToken : action.value
            }

        case Actions.userId :
            return {
                ...state,
                userId : action.value
            }
        default :
        return state
    }

}

export default commonState
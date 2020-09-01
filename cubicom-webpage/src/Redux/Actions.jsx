import { LOGIN_REQUEST,LOGIN_SUCCESS, LOGIN_FAILURE,OPEN_SIDEBAR,CLOSE_SIDEBAR} from './ActionTypes'

export const loginRequest = (payload)=>({
    type: LOGIN_REQUEST,
    payload
})
export const loginSuccess = (payload)=>({
    type: LOGIN_SUCCESS,
    payload
})
export const loginFailure = (payload)=>({
    type: LOGIN_FAILURE,
    payload
})
export const openSidebar = ()=>({
    type: OPEN_SIDEBAR,
    
})
export const closeSidebar = ()=>({
    type: CLOSE_SIDEBAR,
    
})

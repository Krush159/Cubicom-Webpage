
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, OPEN_SIDEBAR,CLOSE_SIDEBAR } from './ActionTypes'

const initState = {
    isAuth: true,
    loggingIn: false,
    userEmail: "",
    userName: "",
    open: true

}
const authReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            console.log(action.payload)
            return {
                ...state,
                isAuth: false,
                loggingIn: true
            }
        case LOGIN_SUCCESS:
            alert("Login Successful")
            return {
                ...state,
                isAuth: true,
                loggingIn: false
            }
        case LOGIN_FAILURE:
            alert(action.payload)
            return {
                ...state,
                isAuth: false,
                loggingIn: false
            }
        case OPEN_SIDEBAR:
            return { ...state, open: true }
        case CLOSE_SIDEBAR:
            return { ...state, open: false }
        default:
            return state;
    }
}
export default authReducer
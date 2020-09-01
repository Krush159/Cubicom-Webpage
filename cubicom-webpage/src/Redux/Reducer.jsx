
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, OPEN_SIDEBAR,CLOSE_SIDEBAR } from './ActionTypes'

const initState = {
    isAuth: false,
    loggingIn: false,
    password: "",
    username: "",
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
            console.log(action.payload)
            if (action.payload.username === "cubicom" && action.payload.password === "password") {
                console.log("yes")
                return {
                    ...state,
                    isAuth: true,
                    loggingIn: false
                }
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
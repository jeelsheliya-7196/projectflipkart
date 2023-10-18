const initialState = {
    login: false,
    signup: false,
    user: null,
    login_msg: '',
    signup_msg: ''
}


export const Aunthntication_reducer = (state = initialState, action) => {

    switch (action.type) {
        case "sign_up":

            return {
                ...state,
                signup: true,
                login : false,
                signup_msg: "Signup successfullly"
            }

        case "log_in":

            return {
                ...state,
                signup: true,
                login: true,
                login_msg: "Login successfullly",
                user: action.payload
            }
        case "log_out":
            return{
                ...state,
                login:false,
                user: null
            }
            

        default:
            return state;
    }
}
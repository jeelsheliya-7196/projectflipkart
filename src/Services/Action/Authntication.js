import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth, { provider } from "../../firebase";
import { Provider } from "react-redux";

export const Loginasync = (data) => {
    return dispatch => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // console.log(userCredential, "userCredential");
                // Signed in 
                const user = userCredential.user;
                dispatch(Login(user));
                // ...
            })
            .catch((error) => {
                console.log(error, "error");
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }
}

const Login = (user) => {
    return {
        type: "log_in",
        payload: user
    }
}

export const Signupasync = (data) => {
    return dispatch => {
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                // console.log(userCredential,"userCredential");
                // Signed in 
                // const user = userCredential.user;
                // ...
                dispatch(Signup());
            })
            .catch((error) => {
                console.log("error",error);
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    }
}


const Signup = () => {
    return {
        type: "sign_up"
    }
}


// google signup

export const google_signup = () => {
    return dispatch => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                console.log("credential",credential);
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                console.log("error",error);
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
}


// google login

export const google_lognin = () => {
    return dispatch => {
        signInWithPopup(auth, Provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                console.log("credential",credential);
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                console.log("error",error.code);
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }
}

// logout

export const Logout_async = ()=>{
    return dispatch =>{
        signOut(auth).then((res)=>{
            dispatch(Logout())
            console.log("res",res);
        }).catch((error)=>{
            console.log("error",error);
        })
    }
}

const Logout = ()=>{
    return{
        type:"log_out"
    }
}
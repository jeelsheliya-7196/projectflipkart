const initialState = {
    cart: [],
    total: 0
}

export const Cart_Addreducer = (state = initialState, action) => {

    switch (action.type) {
        case "CartAdd":
            return {
                ...state,
                cart: [...state.cart, action.payload],
                total: state.cart.reduce((acc, { price }) => {
                    // console.log("price>>>>", price);
                    return acc + price
                }, 0)
            }

        case "DELETE":

            let del = state.cart

            let dele = del.filter((de)=>{
                // console.log("de",de);
                return de.id != action.payload
            })
            // console.log("dele",dele);
            return {
                ...state,
                cart: dele
                
            }

        case "TOTAL":
            return {
                ...state,
                total: action.payload
            }

        default:
            return state
    }
}
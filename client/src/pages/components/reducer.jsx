export const initialState = {
    basket: [],
    user: null,
}

export const subTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
    /*console.log(action)
    console.log(state) */
    switch (action.type) {
        case "add_to_basket":
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
        case "remove_from_basket":
            //console.log(action)
            return {
                ...state,
                basket: state.basket.filter(item => item.id !== action.id)
            }
        case "set_user":
            console.log(action.user?.email)
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}

export default reducer

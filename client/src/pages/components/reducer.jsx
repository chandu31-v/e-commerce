export const initialState = {
    basket: [],
    user: null,
}

export const subTotal = (basket) => basket?.reduce((amount, item) => (item.price*item.quantity) + amount, 0)

const reducer = (state, action) => {
    /*console.log(action)
    console.log(state) */
    switch (action.type) {
        case "add_to_basket":
            let check = false
            let arr = state.basket?.map((item)=>{
                if(item.id===action.item.id){
                    item.quantity+=1
                    check=true
                }
                return item
            })
            return {
                ...state,
                //basket: [...state.basket, action.item]
                basket : check?[...state.basket]:[...state.basket, action.item]
            }
        case "remove_from_basket":
            //console.log(action)
            return {
                ...state,
                basket: state.basket.filter(item => item.id !== action.id)
            }
        case "Decrease_quantity":
            return {
                ...state,
                //basket: state.basket.filter(item => item.id !== action.id)
                basket:state.basket?.map((item)=>{
                    if(item.id===action.id){
                        item.quantity=item.quantity-1
                    }
                    return item
                })
            }
        case "set_user":
            //console.log(action.user?.email)
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}

export default reducer

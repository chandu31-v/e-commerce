import React, { useContext } from "react";
import { DataContext } from "./context"


function Product(props) {

    const [{ basket }, dispatch] = useContext(DataContext)

    const removeFromBasket = () => {
        dispatch({
            type: "remove_from_basket",
            id: props.id,
        })

    }

    return <>
        <div className="flex w-full border-2 m-4 py-8 bg-white z-0">
            <div>
                <img src={props.image} alt="" className="h-64 p-4" />
            </div>
            <div className="p-4">
                <span className="Title">{props.title}</span>
                {/*<span className="name">{data}</span>*/}
                <span className="Price w-full ">${props.price}</span>
                <span className="Star flex">{
                    Array(props.star)
                        .fill()
                        .map((_, i) =>
                            <p>*</p>)
                }</span>
                <button onClick={removeFromBasket} className="border-2 rounded-md border-amber-500 p-1 mt-2 bg-amber-500">Remove from Cart</button>
            </div>
        </div>
    </>
}

export default Product


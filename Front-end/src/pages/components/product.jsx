import React, { useContext } from "react";
import { DataContext } from "./context"


function Product(props) {

    const [{ }, dispatch] = useContext(DataContext)

    const addToBasket = () => {
        dispatch({
            type: "add_to_basket",
            item: {
                id: props.id,
                title: props.title,
                price: props.price,
                star: props.star,
                image: props.image,
            }
        })

    }

    return <>
        <div className="flex flex-col items-center justify-end w-full border-2 m-4 py-8 bg-white z-0">
            <span className="Title">{props.title}</span>
            {/*<span className="name">{data}</span>*/}
            <span className="Price">${props.price}</span>
            <span className="Star flex">{
                Array(props.star)
                    .fill()
                    .map((_, i) =>
                        <p>*</p>)
            }</span>
            <div>
                <img src={props.image} alt="" className="h-64" />
            </div>
            <button onClick={addToBasket} className="border-2 border-amber-500 rounded-md p-1 mt-2 bg-amber-500">Add to Cart</button>
        </div>
    </>
}

export default Product


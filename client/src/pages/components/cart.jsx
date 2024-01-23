import React, { useContext } from "react";
import Header from "./Header";
import { DataContext } from "./context";
import { subTotal } from "./reducer";
import CartProduct from "./cartProduct";

function Cart() {

    const [{ basket }, dispatch] = useContext(DataContext)


    return <>
        <div className="m-0 p-0">
            <Header />
            <div className="flex w-full pt-14" >
                <div className="mr-4 w-full">
                    {basket.map((x) => {
                        return <CartProduct key={x.id+x.title} id={x.id} title={x.title} price={x.price} star={x.star} image={x.image} quantity={x.quantity} />
                    })}
                </div>
                <div className="flex w-full justify-end">
                    <div className="border-2 items-end h-fit w-fit mx-4 p-4 mt-4">
                        <p className="m-1">Subtotal({basket.length} items): ${subTotal(basket)}</p>
                        <div className="flex">
                            <input type="checkbox" className="mr-2" />
                            <p>This contains a gift</p>
                        </div>
                        <button className="border-2 rounded-md border-amber-500 p-1 mt-2 bg-amber-500">Proceed to Checkout</button>
                    </div>
                </div>
            </div>

        </div>
    </>
}


export default Cart
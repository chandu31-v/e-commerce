import React, { useState, useContext, useEffect } from "react";
import search from "../../resources/search.svg"
import logo from "../../resources/amazon_logo.png"
import cart from "../../resources/cart.svg"
import "./component.css"
import { useNavigate } from "react-router-dom";
import { DataContext } from "./context"
import { auth } from "../../server/FireBase"
import { onAuthStateChanged , signOut } from 'firebase/auth';

function Header() {

    useEffect(() => {
        onAuthStateChanged(auth, (data) => {
            if (data) {
                dispatch({
                    type: "set_user",
                    user: data
                })
            }
            else {
                dispatch({
                    type: "set_user",
                    user: null
                })
            }
        })
    }, [])

    const navigate = useNavigate()
    const [name, setname] = useState("Chandu")
    const [{ basket, user }, dispatch] = useContext(DataContext)

    const SignInOut = () => {
        if (user) {
            signOut(auth)
        }
        else {
            navigate("/login")
        }
    }

    return <>
        <div className="nav-bar flex bg-gray-900 w-full pt-1 fixed z-50">
            {/*Amazon logo */}
            <div className="mx-6 mt-4 mb-1 w-20 object-contain">
                <img src={logo} alt="" onClick={() => navigate("/")} />
            </div>
            {/**Input Field */}
            <div className="flex flex-1 items-center mr-6">
                <input placeholder="  Search" type="text" className="w-full h-8 rounded-l-sm " /> {/*search tab */}
                <button onClick={null} className="ml-0 px-2 w-8 h-8 bg-orange-400 rounded-r-sm"><img src={search} alt="" /></button>
            </div>
            {/*Header left links*/}
            <div className="mr-10 mt-1">
                <div className="flex w-full items-center justify-end text-gray-50">
                    <div className="flex flex-col mr-[1vw]">
                        <span className="text-gray-400 text-xs py-0.5" onClick={() => navigate("/profile")}>Hello, {name}</span>
                        <span className="text-sm font-bold" onClick={SignInOut}>
                            {user ? "LogOut" : "LogIn"}
                        </span>
                    </div>
                    <div className="flex flex-col mr-[1vw]">
                        <span className="text-gray-400 text-xs py-0.5" onClick={() => navigate("/orders")}>Returns</span>
                        <span className="text-sm font-bold" onClick={() => navigate("/orders")}>& Orders</span>
                    </div>
                    <div className="flex flex-col mr-[1vw]">
                        <span className="text-gray-400 text-xs p-0.5" onClick={() => navigate("/prime")}>Your</span>
                        <span className="text-sm font-bold " onClick={() => navigate("/prime")}>Prime</span>
                    </div>
                    <div className="flex pt-2"> {/**Cart */}
                        <div className="w-8">
                            <button onClick={() => navigate("/cart")}><img src={cart} alt="" /></button>
                        </div>
                        <span><p className="text-2xl">{basket?.length}</p></span>
                    </div>
                </div>
            </div>

        </div>
    </>
}

export default Header
import React, { useState } from "react";
import amazon_logo from "../../resources/amazon-black.svg"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../server/FireBase"
import { useNavigate } from "react-router-dom";

function SignIn() {

    const [username, setuser] = useState("")
    const [password, setpass] = useState("")

    const navigate = useNavigate()

    const logIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, username, password)
            .then((val) => {
                navigate("/")
            })
    }

    const singIn = (e) => {
        //console.log(e)
        e.preventDefault()
        createUserWithEmailAndPassword(auth, username, password)
            .then((val) => {
                navigate("/")
            })
    }

    return <>
        <div>
            <div className="flex w-full justify-center">  {/*Amazon logo */}
                <img src={amazon_logo} alt="" className="w-28 h-26" onClick={()=>navigate("/")}/>
            </div>
            <div className="flex flex-col items-center">  {/*Username password*/}
                <div className="border-2 rounded-md p-4 pt-1 w-96">
                    <div className="w-96"><label className="flex justify-start items-start mx-4 my-1 text-3xl font-semibold mb-4">Sign in</label></div>
                    <div className="w-96"><label className="mx-4 my-1 text-sm font-bold text-gray-800">Email or mobile phone number</label></div>
                    <div className="w-96 mb-1"><input type="text" placeholder="  Username" onChange={e => setuser(e.target.value)} value={username} className="border-2 rounded-md mx-4 my-1 w-5/6 p-1" /></div>
                    <div className="w-96 mb-1"><input type="password" placeholder="  Password" onChange={e => setpass(e.target.value)} value={password} className="border-2 rounded-md mx-4 my-1 w-5/6 p-1" /></div>
                    <div className="w-96"><button className="border-2 rounded-md mx-4 my-1 w-5/6 text-sm bg-orange-400 border-orange-400 p-1" onClick={logIn}>LogIn</button></div>
                    <div className="flex flex-col">  {/*Terms and condition policy */}
                        <p className="text-xs mt-6">By continuing, you agree to Amazon's {<button className="text-blue-500" onClick={null}>Conditions of Use</button>} and {<button className="text-blue-500" onClick={null}>Privacy Notice</button>}</p>
                    </div>
                    <div className="mt-6">
                        <a href="" className="text-blue-500 text-sm">Need Help</a>
                    </div>
                </div>
                <div className="w-96">
                    <button onClick={singIn} className="w-full text-sm border-2 rounded-md p-1 mt-4 bg-gray-300">Create your Amazon account</button>
                </div>
            </div>

        </div>
    </>
}

export default SignIn
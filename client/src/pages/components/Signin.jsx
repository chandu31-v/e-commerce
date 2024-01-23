import React, { useState } from "react";
import amazon_logo from "../../resources/amazon-black.svg"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../../server/FireBase"
import { useNavigate } from "react-router-dom";

function Signin() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone,setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate()

    const createAccount = () => { }

    return <>
        <div>
            <div className="flex w-full justify-center">  {/*Amazon logo */}
                <img src={amazon_logo} alt="" className="w-28 h-26" onClick={() => navigate("/")} />
            </div>
            <div className="flex flex-col items-center">  {/*Email password name password*/}
                <div className="border-2 rounded-md p-4 pt-1 w-96">
                    <div className="w-96"><label className="flex justify-start items-start mx-4 my-1 text-3xl font-semibold mb-4">Create Account</label></div>

                    <div className="w-96"> {/**Name */}
                        <label className="mx-4 my-1 text-sm font-bold text-gray-800">Name</label>
                        <input placeholder=" Name" value={name} onChange={(e) => setName(e.target.value)} className="border-2 rounded-md mx-4 my-1 w-5/6 p-1" />
                    </div>
                    <div className="w-96"> {/**Email */}
                        <label className="mx-4 my-1 text-sm font-bold text-gray-800">Email</label>
                        <input placeholder=" Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border-2 rounded-md mx-4 my-1 w-5/6 p-1" />
                    </div>
                    <div className="w-96 mb-1"> {/**PhoneNUmber */}
                        <label className="mx-4 my-1 text-sm font-bold text-gray-800">Phone Number</label>
                        <input type="text" placeholder=" PhoneNumber" value={phone} onChange={e => setPhone(e.target.value)} className="border-2 rounded-md mx-4 my-1 w-5/6 p-1" />
                    </div>
                    <div className="w-96 mb-1"> {/**Password */}
                        <label className="mx-4 my-1 text-sm font-bold text-gray-800">Password</label>
                        <input type="password" placeholder="  Password" value={password} onChange={e => setPassword(e.target.value)} className="border-2 rounded-md mx-4 my-1 w-5/6 p-1" />
                    </div>
                    <div className="w-96 mb-1"> {/**Confirm password */}
                        <label className="mx-4 my-1 text-sm font-bold text-gray-800">Confirm Password</label>
                        <input type="password" placeholder=" Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="border-2 rounded-md mx-4 my-1 w-5/6 p-1" />
                    </div>
                    <div className="w-96"> {/**Create Account button */}
                        <button className="border-2 rounded-md mx-4 my-1 w-5/6 text-sm bg-orange-400 border-orange-400 p-1" onClick={createAccount}>Create Account</button>
                    </div>

                    <div className="flex w-full justify-end mr-10"><button className="text-blue-500 text-xs" onClick={() => { navigate("/Login") }}>Have account?</button></div>
                    <div className="flex flex-col">  {/*Terms and condition policy */}
                        <p className="text-xs mt-6">By continuing, you agree to Amazon's {<button className="text-blue-500" onClick={null}>Conditions of Use</button>} and {<button className="text-blue-500" onClick={null}>Privacy Notice</button>}</p>
                    </div>
                    <div className="mt-6">
                        <a href="" className="text-blue-500 text-sm">Need Help</a>
                    </div>
                </div>
            </div>

        </div>
    </>
}


export default Signin

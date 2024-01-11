import React, { useState, useEffect } from "react";
import "../components/component.css"
import img1 from "./product_img/img1.jfif"
import img2 from "./product_img/img2.jfif"
import img3 from "./product_img/img3.jfif"
import img4 from "./product_img/img4.jfif"
import { useNavigate } from "react-router-dom"

function Scroll() {

    let slides = document.getElementsByClassName("imgs")
    let [index, setIndex] = useState(0);

    useEffect(() => {
        //hide all images
        let interval = setInterval(() => {

            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none"
            }
            //make specific image visible
            slides[index].style.display = "block"

            //check if length is greater than index to make a loop
            if (index == slides.length - 1) {
                setIndex(0)
            }
            else {
                setIndex(index + 1)
            }

        }, 3000)

    })


    const navigate = useNavigate()

    return <>
        <div className="">
            <div className="img-slide">
                <a onClick={() => navigate("/")}><img className="imgs" src={img1} alt="" /></a>
                <a onClick={() => navigate("/Signin")}><img className="imgs" src={img2} alt="" /></a>
                <a onClick={() => navigate("/")}><img className="imgs" src={img3} alt="" /></a>
                <a onClick={() => navigate("/")}><img className="imgs" src={img4} alt="" /></a>

            </div>
        </div>
    </>
}

export default Scroll

import React from "react";
import Header from "./components/Header"
import Product from "./components/product"
import amazon_home from "../resources/amazon_home.jpg"
import "./components/component.css"
import product_img from "../resources/product_img.jpg"

function Home() {


    return <>
        <Header />
        <div className="pt-12">
            <div className="max-w-screen bg-gray-400">
                {/**Home image */}
                <div className="amazon_home_img">
                    <img src={amazon_home} alt="" />
                </div>

                {/**Product list */}
                <div className="flex mx-2 flex-grow">
                    <Product id={1} title="Mixer" price={10} star={3} image={product_img} />
                    <Product id={2} title="Mixer" price={10} star={3} image={product_img} />
                </div>
                <div className="flex mx-2">
                    <Product id={3} title="Mixer" price="10" star={3} image={product_img} />
                    <Product id={4} title="Mixer" price="10" star={3} image={product_img} />
                    <Product id={5} title="Mixer" price="10" star={3} image={product_img} />
                </div>
            </div>
        </div>
    </>

}

export default Home
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductModal from '../../SharedItems/SingleProduct/ProductModal/ProductModal';
import ReportModal from '../../SharedItems/SingleProduct/ReportModal/ReportModal';
import SingleProduct from '../../SharedItems/SingleProduct/SingleProduct';
import Category from '../Category/Category';
import WhyUs from './WhyUs/WhyUs';
// import axios from 'axios'

const Home = () => {
    const [category, setCategory] = useState([])
    useEffect(() => {
        fetch('https://vehicle-hub-server.vercel.app/category')
            .then(res => res.json())
            .then(data => setCategory(data))
    }, [])
    const [productInfo, setProductInfo] = useState([])
    const status = {
        Status: 'approved'
    }
    useEffect(() => {
        fetch(`https://vehicle-hub-server.vercel.app/products/${'approved'}`)
            .then(res => res.json())
            .then(data => setProductInfo(data))
        // axios.get('https://vehicle-hub-server.vercel.app/product')
        // .then(data=>{
        //     const prosucts=data.data.data;
        //     setProductInfo(prosucts)
        // })
    }, [status])

    const [productModalInfo, setProductModalInfo] = useState(null)
    const [productModalReport, setProductModalReport] = useState(null)
    return (
        <div>
            <section className="relative bg-[url(https://cdn.motor1.com/images/mgl/pKq0J/s3/2022-land-rover-range-rover-exterior-studio-shots.jpg)] bg-cover bg-center bg-no-repeat">
                <div
                    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/90 sm:to-white/25"
                ></div>

                <div
                    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
                >
                    <div className="max-w-xl text-center sm:text-left">
                        <h1 className="text-3xl font-extrabold sm:text-5xl">
                            Find Your Dream Car

                            <strong className="block text-3xl text-pink-600">
                                We sell quality reconditioned <br /> and new vehicles
                            </strong>
                        </h1>

                        <p className="mt-4 max-w-lg sm:text-xl sm:leading-relaxed">

                        </p>

                        <div className="mt-8 flex flex-wrap gap-4 text-center">
                            <Link
                                href="#"
                                className="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
                            >
                                Book Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 mt-10">
                {
                    productInfo.map(singleCate => <SingleProduct key={singleCate._id} singleCate={singleCate} setProductModalReport={setProductModalReport} setProductModalInfo={setProductModalInfo}></SingleProduct>)
                }
            </div>
            {
                productModalInfo &&
                <ProductModal productModalInfo={productModalInfo}></ProductModal>
            }
            {
                productModalReport &&
                <ReportModal productModalReport={productModalReport} ></ReportModal>
            }
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-3 mt-10">
                {
                    category.map((product, i) => <Category key={i} product={product}></Category>)
                }
            </div>
            <div className='mx-auto'>
                <WhyUs></WhyUs>
            </div>
        </div>
    );
};

export default Home;
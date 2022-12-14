import React from 'react';
import { Link } from 'react-router-dom';

const AdvertisItems = ({ product }) => {
    return (
        <div>
            <Link href="" className="group relative block h-96">
                <span className="absolute inset-0 border-2 border-dashed border-black"></span>

                <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                    <div className="px-8 pb-8 transition-opacity w-full  group-hover:absolute group-hover:opacity-0">
                        <img src={product.picture} className="w-full mx-auto h-[250px]" alt="" />

                        <h2 className="mt-4 text-2xl font-medium">{product.title}</h2>
                    </div>

                    <div className="absolute p-8 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100">
                        <h3 className="mt-4 text-2xl font-medium">{product.name}</h3>

                        <p className="mt-4"> Description : {product.Description}</p>
                        <p className="mt-4"> Condition : {product.Condition}</p>
                        <p className="mt-4"> Company : {product.category}</p>
                        <p className="mt-4"> original : {product.resalePrice}</p>
                        <p className="mt-4">Location : {product.location}</p>
                        <p className="mt-4">Selling Price : $ {product.resalePrice}</p>

                        <button className="mt-8 font-bold btn btn-sm text-white bg-secondary">View Details</button>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default AdvertisItems;
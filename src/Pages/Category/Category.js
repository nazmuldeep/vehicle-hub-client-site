import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ product }) => {
    return (

        <div className="rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-1 shadow-xl">
            <Link to={`/categoryProduct/${product.category}`} className="block rounded-xl bg-white p-6 sm:p-8" href="">
                <div className=" sm:pr-8">
                    <h3 className="text-xl font-bold text-center text-gray-900">{product.category}</h3>
                </div>
            </Link>
        </div>
    );
};

export default Category;
import React from "react";
import { FaUserPlus, FaUserShield, FaUser } from "react-icons/fa";

const WhyUs = () => {
    return (
        <div className="text-center py-5">
            <h5 className="  font-semibold text-3xl">Why Vehicle hub?</h5>
            <h2>Experiance and maintain with best price best deal </h2>

            <div className="flex lg:flex-row justify-center flex-col gap-5 mb-8 w-10/12 mx-auto mt-5">
                <a
                    className="flex flex-col p-16 text-3xl rounded-xl border border-gray-800 bg-white text-slate-500 shadow-xl items-center justify-center shadow-slate-500"
                    href="/"
                >
                    <FaUser></FaUser>
                    <h3 className="mt-3 text-xl font-bold text-slate-900">
                        10000+ User
                    </h3>
                </a>
                <a
                    className="flex flex-col p-16 text-3xl rounded-xl border border-gray-800  bg-white text-slate-500  shadow-xl items-center justify-center shadow-slate-500"
                    href="/"
                >
                    <FaUserShield></FaUserShield>
                    <h3 className="mt-3 text-xl font-bold text-slate-900">
                        Trusted Seller
                    </h3>
                </a>

                <a
                    className="flex flex-col text-3xl rounded-xl border border-gray-800 bg-white text-slate-500 p-16 shadow-xl items-center justify-center shadow-slate-500"
                    href="/"
                >
                    <FaUserPlus></FaUserPlus>
                    <h3 className="mt-3 text-xl font-bold text-slate-900">
                        4+ Years Customer <br /> Staisfaction
                    </h3>
                </a>
            </div>
        </div>
    );
};

export default WhyUs;
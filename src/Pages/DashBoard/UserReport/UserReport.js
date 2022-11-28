import React, { useEffect, useState } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import axios from "axios";
const UserReport = () => {

    const [showProducts, setShowProducts] = useState([])
    useEffect(() => {
        axios
            .get(`https://vehicle-hub-server.vercel.app/reports`)
            .then((res) => setShowProducts(res.data));
    }, [])


    return (
        <div>
            <div>
                <h1 className='text-3xl font-bold my-10 bg-pink-600 rounded-3xl py-10 text-white text-center'>Wellcome To User Reports Profile</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>sl</th>
                            <th>Name</th>
                            <th>img</th>
                            <th>Resale Price</th>
                            <th>Buyer Email</th>
                            <th>buyer Name</th>
                            <th>Contact number</th>
                            <th>Report</th>
                            <th>send Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            showProducts.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>{product.title}</td>
                                <td>
                                    <PhotoProvider>
                                        <PhotoView src={product?.picture}>
                                            <img src={product?.picture} className="w-8 h-8" alt="" />
                                        </PhotoView>
                                    </PhotoProvider>
                                </td>
                                <td>{product.resalePrice} Year</td>
                                <td>{product.buyerEmail}</td>
                                <td>{product.byerdisplayName}</td>
                                <td>{product.phoneNumber}</td>
                                <td>{product?.Report}</td>

                                <td><input type="text" placeholder='sand Feedback' /></td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default UserReport;
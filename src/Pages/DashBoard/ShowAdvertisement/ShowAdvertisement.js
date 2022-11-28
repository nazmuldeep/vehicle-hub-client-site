import React, { useEffect, useState } from 'react';
import axios from "axios";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { toast } from 'react-toastify';

const ShowAdvertisement = () => {
    // const {data:showProducts=[]}=useQuery({
    //     queryKey: ['appointmentOptions', ],
    //     queryFn: async () => {
    //         const res = await fetch(`https://vehicle-hub-server.vercel.app/product`);
    //         const data = await res.json();
    //         return data
    //     }

    // })
    const [showProducts, setShowProducts] = useState([])
    useEffect(() => {
        axios
            .get(`https://vehicle-hub-server.vercel.app/product`)
            .then((res) => setShowProducts(res.data));
    }, [])
    // handle Delete
    const handleDelete = id => {
        const agree = window.confirm('you want to delete')
        if (agree) {
            fetch(`https://vehicle-hub-server.vercel.app/productDelete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = showProducts.filter(r => r._id !== id);
                        setShowProducts(remaining);
                        toast.success('delete successfully')
                    }
                })
        }
    }
    console.log(showProducts);
    return (
        <>
            <div>
                <h1 className='text-3xl my-10 bg-pink-600 text-white font-bold rounded-3xl py-10  text-center'>Show All Advertisement</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>sl</th>
                            <th>Seller Name</th>
                            <th>Title</th>
                            <th>img</th>
                            <th>Conditions</th>
                            <th>Original Price</th>
                            <th>Sell Price</th>
                            <th>used</th>
                            <th>status</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            showProducts.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td>{product?.userInfo?.displayName}</td>
                                <td>{product.title}</td>
                                <td>
                                    <PhotoProvider>
                                        <PhotoView src={product?.picture}>
                                            <img src={product?.picture} className="w-13 h-10 " alt="" />
                                        </PhotoView>
                                    </PhotoProvider>
                                </td>
                                <td>{product.Condition}</td>
                                <td>{product.originalPrice}</td>
                                <td>{product.resalePrice}</td>
                                <td>{product.useTime} Year</td>
                                <td>{product.Status}</td>
                                <td><button onClick={() => handleDelete(product._id)} className='btn btn-sm bg-red-600 text-white'>DELETE</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ShowAdvertisement;
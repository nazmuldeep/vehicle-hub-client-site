import React, { useContext } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { useQuery } from 'react-query';

import { toast } from 'react-toastify';

import { AuthContext } from '../../../Context/AuthProvider.js/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext)
    const { email, displayName } = user
    console.log(email);

    // const [showProducts, setShowProducts]=useState([])
    //     useEffect(()=>{
    //         axios
    //         .get(`https://vehicle-hub-server.vercel.app/myProduct/${email}`)
    //         .then((res) => setShowProducts(res.data));
    //     },[email])
    const { data: showProducts = [], refetch } = useQuery({
        queryKey: ['myProduct'],
        queryFn: () => fetch(`https://vehicle-hub-server.vercel.app/myProduct/${email}`)
            .then(res => res.json())
    })
    const handleDelete = id => {
        const agree = window.confirm('you want to delete')
        if (agree) {
            fetch(`https://vehicle-hub-server.vercel.app/productDelete/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        refetch()
                        toast.success('delete successfully')
                    }
                })
        }
    }
    const status = {
        Status: 'approved'
    }
    console.log(status);
    const handleSubmit = (id) => {
        console.log(id);
        fetch(`https://vehicle-hub-server.vercel.app/updateProduct/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(status)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                refetch()
            })
    }

    return (
        <div>
            <div>
                <h1 className='text-3xl font-bold my-10 bg-pink-600 rounded-3xl py-10 text-white text-center'>Welcome To This {displayName}'s  Product</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>sl</th>
                            <th>Name</th>
                            <th>img</th>
                            <th>Conditions</th>
                            <th>Original Price</th>
                            <th>Sell Price</th>
                            <th>used</th>
                            <th>status</th>
                            <th>advertise</th>
                            <th>Delete</th>
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
                                <td>{product.Condition}</td>
                                <td>{product.originalPrice}</td>
                                <td>{product.resalePrice}</td>
                                <td>{product.useTime} Year</td>
                                <td>{product?.Status}</td>
                                <td> {product?.Status === 'Available' ?

                                    <><button type='submit' onClick={() => handleSubmit(product._id)} className='btn btn-sm bg-green-600 text-white' > make advertise</button></> :
                                    <><button type='submit' onClick={() => handleSubmit(product._id)} disabled className='btn  btn-sm bg-green text-white' > make advertise</button></>
                                } </td>
                                <td><button onClick={() => handleDelete(product._id)} className='btn btn-sm bg-red-600 text-white'>DELETE</button></td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyProducts;
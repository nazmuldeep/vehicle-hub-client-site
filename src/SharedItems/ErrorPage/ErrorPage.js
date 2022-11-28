import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
                <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                    <img src="https://drudesk.com/sites/default/files/2018-02/404-error-page-not-found.jpg" alt="" />
                    <div className='max-w-md text-center'>

                        <p className='text-2xl font-semibold md:text-xl mb-12'>
                            OPS SOMETHING WENT WRONG ...
                        </p>
                        <Link
                            to='/'
                            className='px-8 py-3 font-semibold rounded bg-pink-600 text-white'
                        >
                            Home Page
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;
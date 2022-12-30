import React from 'react';

const RightSide = () => {
    return (
        <div>
            <div className='lg:grid lg:grid-cols-1 md:grid md:grid-cols-2 grid grid-cols-4 lg:px-10  px-12  font-semibold'>
                <h2 className='text-2xl text font-bold text-center'>Advertisement</h2>
                <div className='my-8'>
                    <div className="hero h-[250px]" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-3xl font-bold">Hello there</h1>
                                <p className="mb-5"></p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSide;
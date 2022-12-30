import React from 'react';

const RightSide = () => {
    return (
        <div>
            <div className='lg:grid lg:grid-cols-1 md:grid md:grid-cols-2 grid grid-cols-4 lg:px-10 gap-20  px-12  font-semibold'>
                <h2 className='text-2xl text font-bold text-center text-blue-500 my-10'>Advertisement</h2>
                <div className='my-8  sm:w-full md:h-[250px] lg:h-[250px]'>
                    <button>
                        <div className="hero" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80")` }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-3xl font-bold">Visit Our Site</h1>
                                    <p className="mb-5">A website can be anything you want it to be… but chances are, you want it to be one of the most popular types of websites that already exist.</p>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
                <div className='my-8  sm:w-full md:h-[250px] lg:h-[250px]'>
                    <button>
                        <div className="hero" style={{ backgroundImage: `url("https://cdn.mos.cms.futurecdn.net/gvQ9NhQP8wbbM32jXy4V3j.jpg")` }}>
                            <div className="hero-overlay bg-opacity-60"></div>
                            <div className="hero-content text-center text-neutral-content">
                                <div className="max-w-md">
                                    <h1 className="mb-5 text-3xl font-bold">Learn Photography</h1>
                                    <p className="mb-5">Being a photographer is no easy business; it takes a true artist to capture the emotion of the moment and take pictures that will make people smile for years to come.</p>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RightSide;
import React from 'react';
const LeftSide = () => {
    return (
        <div>
            <div className='lg:grid lg:grid-cols-1 md:grid md:grid-cols-2 grid grid-cols-4 lg:px-10  px-12 text-blue-500 font-semibold'>
            <h2 className='text-2xl font-bold my-5'>Features</h2>
                <h2 className='text-lg col'>Friends</h2>
                <h2 className='text-lg col'>Settings</h2>
                <h2 className='text-lg col'>Request</h2>
                <h2 className='text-lg col'>Following</h2>
                <h2 className='text-lg col'>Followers</h2>
                <h2 className='text-lg col'>History</h2>
                <h2 className='text-lg col'>Shared Items</h2>
                <h2 className='text-lg col'>Security</h2>
            </div>
        </div>
    );
};

export default LeftSide;
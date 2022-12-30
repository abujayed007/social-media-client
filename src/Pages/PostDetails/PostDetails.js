import React from 'react';
import { FaRegHeart, FaShare } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
    const postDetails = useLoaderData([])
    const { status, img } = postDetails
    return (
        <div className="flex justify-center">
            <div className="card w-96 my-10 rounded-md shadow-lg">
                <div className="card-body">
                    <p>{status}</p>
                </div>
                <img src={img} alt="No photos" />
                <div className='flex gap-x-4 p-2'>
                    <button> <FaRegHeart></FaRegHeart></button>
                    <button><FaShare></FaShare></button>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;
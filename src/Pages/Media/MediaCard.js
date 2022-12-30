import React, { useContext } from 'react';
import { FaRegHeart, FaShare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const MediaCard = ({ post }) => {
    const { user } = useContext(AuthContext)
    const { _id , img, status} = post
    return (
        <div className="card w-96 my-10 rounded-md shadow-lg">
            <div className='flex p-7'>
                <img src={user?.photoURL} className='w-6 h-4 mt-1 rounded-full' alt="No photos" />
                <p className='font-bold'>{user?.displayName}</p>
            </div>
            <div className="card-body">
                <p>{status}</p>
            </div>
            <img src={img} alt="No photos" />
            <div className='flex gap-x-4 p-2'>
                <button> <FaRegHeart></FaRegHeart></button>
                <button><FaShare></FaShare></button>
                <Link className='font-semibold' to={`/posts/${_id}`}> More details </Link>
            </div>
        </div>
    );
};

export default MediaCard;
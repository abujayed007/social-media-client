import React from 'react';
import { FaEdit } from 'react-icons/fa';

const AboutCard = ({userin, setEditInfo}) => {
    return (
        <div className='flex justify-center'>
            <div className='p-8 shadow-xl'>
            <h1 className="text-2xl text-center font-bold">User Information</h1>
            <div className='flex justify-end'>
            <label onClick={()=>setEditInfo(userin)} htmlFor="edit-modal" className="btn"><FaEdit></FaEdit></label>
            </div>
            <h1 className="text-2xl">Name: {userin.name}</h1>
            <h1 className="text-2xl">Email: {userin.email}</h1>
            <h1 className="text-2xl">Address: {userin.address}</h1>
            <h1 className="text-2xl">University: {userin.university}</h1>
            </div>
        </div>
    );
};

export default AboutCard;
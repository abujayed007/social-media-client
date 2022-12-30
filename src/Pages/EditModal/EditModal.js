import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const EditModal = ({ editInfo }) => {
    const user = useLoaderData()
    const [userInfo, setUserInfo] = useState(editInfo)

    console.log(editInfo)
    const handleSubmit = id =>{
        
        fetch(`http://localhost:5000/users/${id}`,{
            method:'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(editInfo)

        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })

    }
    const handleOnChange = event =>{
        const field = event.target.name
        const value = event.target.value
        const newUser = [...userInfo]
        setUserInfo(newUser)
    }
    return (
        <div>
            <input type="checkbox" id="edit-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="edit-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h2 className="text-center text-2xl font-bold my-5">Your Information</h2>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-y-3'>
                        <input  name='name' className='input input-bordered w-full max-w-xs' defaultValue={editInfo.name} type="text" />
                        <input  name='email' className='input input-bordered w-full max-w-xs' defaultValue={editInfo.email} type="text" />
                        <input  name='address' className='input input-bordered w-full max-w-xs' defaultValue={editInfo.address} type="text" />
                        <input  name='university' className='input input-bordered w-full max-w-xs' defaultValue={editInfo.university} type="text" />
                        <div>
                            <input className='btn btn-sm' type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditModal;
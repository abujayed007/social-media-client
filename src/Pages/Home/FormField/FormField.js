import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FaImages } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const FormField = () => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    const navigate = useNavigate()
    // console.log(user)

    const handleForm = data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);

                    const postData = {
                        img: imgData.data.url,
                        status: data.text,
                    }
                    fetch('https://social-media-server-swart.vercel.app/posts', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(postData)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            navigate('/media')
                        })
                }
            })

    }
    
    return (
        <div className='flex justify-center'>
            <form onSubmit={handleSubmit(handleForm)}>
                <div>
                    <label>Write Your Status</label>
                    <input {...register("text")} type="text" placeholder="Type here" className="input mt-2 input-bordered w-full h-32" />
                </div>
                <div className='my-2 flex justify-between'>
                    <label className='text-xl btn btn-ghost text-pink-400' htmlFor="image"><FaImages className='text-xl'></FaImages></label>
                    <input {...register("image")} className='hidden' type="file" id="image" />
                    <input id='submit' type="submit" className='btn bg-blue-500 btn-sm my-3' value='Post' />
                </div>

            </form>
        </div>
    );
};

export default FormField;
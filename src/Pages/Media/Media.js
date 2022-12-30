import React, { useEffect, useState } from 'react';
import MediaCard from './MediaCard';

const Media = () => {
    const [posts, setPosts] = useState([]) 
    
    useEffect(()=>{
        fetch('http://localhost:5000/posts')
        .then(res => res.json())
        .then(data => {
            setPosts(data)
        })
    },[])
    return (
        <div className='flex justify-center gap-6'>
            <div>
                {
                    posts.map(post => <MediaCard key={post._id} post={post}></MediaCard>)
                }
            </div>
        </div>
    );
};

export default Media;
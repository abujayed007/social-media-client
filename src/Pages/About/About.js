import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import EditModal from '../EditModal/EditModal';
import AboutCard from './AboutCard';

const About = () => {
    const {user} = useContext(AuthContext)
    const [userInfo, setUserInfo] = useState([])
    const [editInfo, setEditInfo] = useState(null)
    useEffect(()=>{
        fetch(`http://localhost:5000/users?email=${user?.email}`)
        .then(res => res.json())
        .then(data =>{
            setUserInfo(data)
            // console.log(data);
        })
    },[user?.email])
    return (
        <div className='my-5'>
            {
                userInfo.map(userin => <AboutCard key={userin._id} userin={userin} setEditInfo={setEditInfo}> </AboutCard>)
            }
            <div>
                {
                    editInfo &&
                    <EditModal editInfo={editInfo}></EditModal>
                }
            </div>
        </div>
    );
};

export default About;
import React from 'react';
import Media from '../../Media/Media';
import Footer from '../Footer/Footer';
import FormField from '../FormField/FormField';
import LeftSide from '../LeftSide/LeftSide';
import Navbar from '../Navbar/Navbar';
import RightSide from '../RightSide/RightSide';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='row lg:grid grid-cols-3 '>
                <div className='lg:col'>
                    <LeftSide></LeftSide>
                </div>
                <div className='lg:col w-full'>
                    <FormField></FormField>
                    <Media></Media>
                </div>
                <div className='lg:col'>
                   <RightSide></RightSide>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;
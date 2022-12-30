import React from 'react';
import Media from '../../Media/Media';
import Footer from '../Footer/Footer';
import FormField from '../FormField/FormField';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
           <FormField></FormField>
           <Media></Media>
           <Footer></Footer>
        </div>
    );
};

export default Home;
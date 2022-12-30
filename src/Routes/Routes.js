import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About/About";
import EditModal from "../Pages/EditModal/EditModal";
import FormField from "../Pages/Home/FormField/FormField";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Main from "../Pages/Main/Main";
import Media from "../Pages/Media/Media";
import PostDetails from "../Pages/PostDetails/PostDetails";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";




const routes = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>
    },
    {
        
        path:'/',
        element:<Main></Main>,
        children:[
           
            {
                path:'/media',
                element:<Media></Media>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'about',
                element:<About></About>
            },
            {
                path:'/posts/:id',
                element:<PostDetails></PostDetails>,
                loader: ({params}) =>{
                    return fetch(`http://localhost:5000/posts/${params.id}`)
                }
            },
            {
                path:'/update/:id',
                element:<EditModal></EditModal>,
                loader: ({params}) =>{
                    return fetch(`http://localhost:5000/users/${params.id}`)
                }
            }
        ]
    }
])
export default routes
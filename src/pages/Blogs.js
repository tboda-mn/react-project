import React from 'react'
import {Navigate} from 'react-router-dom'

function Blogs(){
    return(
        <div>
            <Navigate to="https://www.wix.com/"/>
            About
            <button> Go to the home page</button>
        </div>
    );
}
export default Blogs;
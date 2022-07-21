import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={'flex justify-between items-center px-5 h-[50px] bg-gray-500 shadow-md text-white'}>
            <h3 className={'font-bold'}>Github Search</h3>

            <span>
                <Link className={'mr-2'} to={'/'}>Home</Link>
                <Link to={'/favourite'}>Favourite</Link>
            </span>
        </nav>
    );
};

export default Navigation;
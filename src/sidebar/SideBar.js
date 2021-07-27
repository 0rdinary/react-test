import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link } from 'react-router-dom'

import './SideBar.css';

import SideBarButton from './SideBarButton';
import LogoButton from './LogoButton';

function SideBar() {
    const [selected, setSelected] = useState(null);

    return (
        <div className="sidebar-wrapper">
            <div className="sidebar">
                <LogoButton />
                <hr />
                <Link to='/content/profile'>
                    <SideBarButton
                        title={'Profile'}
                        image={'profile'}/>
                </Link>
                <Link to='/content/closet'>
                    <SideBarButton
                        title={'Closet'}
                        image={'closet'}
                    />
                </Link>
            </div>
        </div>
    );
}

export default SideBar;
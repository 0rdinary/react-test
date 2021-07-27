import React, { useState, useEffect } from 'react';
import logo from '../../public/sidebar/logo.png';
import profile from '../../public/sidebar/profile.png';
import closet from '../../public/sidebar/closet.png';

import './SideBarButton.css';

function SideBarButton(props) {
    let imgSrc;
    let cName = 'btn-div ';
    console.log(window.location.origin);

    switch (props.image) {
        case 'logo':
            imgSrc = logo;
            cName += props.image;
            break;
        case 'profile':
            imgSrc=profile;
            break;
        case 'closet':
            imgSrc=closet;
            break;
    }

    return (
        <div className='btn-div'>
            <button className={props.title}>
                <img className='symbol' src={imgSrc}/> {props.title}
            </button>
        </div>
    );
}

export default SideBarButton;
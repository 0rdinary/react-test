import React, { useState, useEffect } from 'react';

import './Content.css';

import LoginForm from "./login/LoginForm";
import ClosetWrapper from './closet/ClosetWrapper';

function Content({match}) {
    const [closets, setClosets] = useState([
    ]);

    const addCloset = (closet) => {
        if (closets.length == 9) return;
        setClosets([...closets, closet]);
    }

    if (match.params.title == 'closet') {
        return (
            <div className="content-wrapper">
                <ClosetWrapper
                    setClosets={() => addCloset({id:(closets.length+1) ,name:('closet'+parseInt(closets.length+1)), img:null, clothes:[]})}
                    closets={closets} />    
            </div>
        )
    }

    return (
        <div>

        </div>
    );
}

export default Content;
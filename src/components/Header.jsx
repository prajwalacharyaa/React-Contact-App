import React from "react";
import {
    BrowserRouter,
    Link
} from "react-router-dom"

const Header = () => {
    return (
        <div className="ui fixed menu" style={{ background: '#1ca8f0', }
        }>
            <div className="ui container center">
                <h2 style={{ color: 'white' }}>React Contact App</h2>
            </div>
        </div>

    );
};

export default Header;

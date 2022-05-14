import React from 'react';

const SharedButton = ({children}) => {
    return (
        <div>
            <button className="btn btn-primary">{children}</button>
        </div>
    );
};

export default SharedButton;
// Code SimplerComponentHere Here

import React from 'react';

const SimplerComponent = (props) => {
return (
        <div>
        "I am just happy".
            <button 
            onClick={props.handleClick}
            >Change mood</button>
        </div>

    );
};

export default SimplerComponent;
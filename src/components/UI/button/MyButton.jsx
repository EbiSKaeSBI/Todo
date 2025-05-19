import React from 'react';
import './MyButton.css'

function MyButton({children,...props}) {
    return (
        <button className="button_add" {...props}>
            {children}
        </button>
    );
}

export default MyButton;
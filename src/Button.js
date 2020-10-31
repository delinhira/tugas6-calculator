import React from 'react';
import Calculate from './Calculate';

const Button = (props) => {
    const { value } = props
    return (
        <>
            <button
                className="btn btn-info m-1 align-middle"
                value={value}
                onClick={Calculate}
                style={{width: "20%", height:"70px", fontSize:"30px"}}
            >
                {value}
            </button>
        </>
    );
}
 
export default Button;
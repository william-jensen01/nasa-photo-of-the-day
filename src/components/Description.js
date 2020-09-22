import React from 'react';

const Description = (props) => {
    const { explanation, copy } = props
    return (
        <div className="description-container">
            <p>{ explanation }</p>
            <span>{ copy }</span>
        </div>
    )
}

export default Description
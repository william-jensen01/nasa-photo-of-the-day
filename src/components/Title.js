import React from 'react';

const Title = (props) => {
    const { title, date } = props
    return (
        <div className="title-container">
            <h2>{ title }</h2>
            <h3>{ date }</h3>
        </div>
    )
}

export default Title
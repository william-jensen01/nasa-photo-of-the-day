import React from 'react';

const Image = (props) => {
    const { url } = props
    return (
        <div>
            <img src={ url } alt={'Nasa Photo of the Day'} />
        </div>
    )
}

export default Image
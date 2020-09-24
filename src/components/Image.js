import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    width: 70%;
    border-radius: 10px;
`

const Image = (props) => {
    const { url } = props
    return (
        <Img src={ url } alt={'Nasa Photo of the Day'} />
    )
}

export default Image
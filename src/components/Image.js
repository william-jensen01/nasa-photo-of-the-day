import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    width: 100%;
    border-radius: 10px;
    margin: auto;
`
const ImgContainer = styled.div`
    border: solid 2px darkgrey;
    width: 70%;
    margin: auto;
    display: flex;
    border-radius: 12px;
`

const Image = (props) => {
    const { url } = props
    return (
        <ImgContainer>
            <Img src={ url } alt={'Nasa Photo of the Day'} />
        </ImgContainer>
    )
}

export default Image
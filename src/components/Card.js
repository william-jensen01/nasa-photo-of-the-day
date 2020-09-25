import React from 'react';
import Title from './Title';
import Image from './Image';
import Description from './Description'
import styled from 'styled-components';

const CardContainer = styled.div`
border: solid 4px black;
background-color: #fff8e5;
border-radius: 10px;
padding: 10px;
width: 70%;
margin: 10px auto;
`

const Card = ({props}) => {
    const {date, explanation, title, url} = props;

    return (
        <CardContainer>
            <Title date={date} title={title} />
            <Image url={url} />
            <Description explanation={explanation} />
        </CardContainer>
    )
};

export default Card;
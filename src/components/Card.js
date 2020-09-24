import React from 'react';
import Title from './Title';
import Image from './Image';
import Description from './Description'
import styled from 'styled-components';

const CardContainer = styled.div`
border: solid 2px black;
background-color: #ffe8ab;
box-shadow: 2px 2px lightgrey;
border-radius: 10px;
padding: 20px;
margin-top: 100px;
width: 80%;
margin: 0 auto;
margin-bottom: 25px;
`

const Card = ({props}) => {
    const {
        date,
        explanation,
        title,
        url,
      } = props;

    return (
        <CardContainer>
            <Title date={date} title={title} />
            <Image url={url} />
            <Description explanation={explanation} />
        </CardContainer>
    )
};

export default Card;
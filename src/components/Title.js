import React from 'react';
import styled from 'styled-components';

const Header = styled.div `
h1 {
    margin: 5px;
    font-size: 2.5rem;
    text-transform: uppercase;
}

h2 {
    margin-top: 0;
    margin-bottom: 20px;
    font-style: italic;
    font-size: 1.25rem;
    opacity: .6;
}
`

const Title = (props) => {
    const { title, date } = props
    return (
        <Header>
            <h1>{ title }</h1>
            <h2>{ date }</h2>
        </Header>
    )
}

export default Title
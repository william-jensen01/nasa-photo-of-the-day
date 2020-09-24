import React from 'react';
import styled from 'styled-components';

const Header = styled.div `
h2 {
    margin: 0;
}

h3 {
    margin-top: 5px;
    margin-bottom: 20px;
    font-style: italic;
    opacity: .6;
}
`

const Title = (props) => {
    const { title, date } = props
    return (
        <Header>
            <h2>{ title }</h2>
            <h3>{ date }</h3>
        </Header>
    )
}

export default Title
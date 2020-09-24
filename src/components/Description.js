import React from 'react';
import styled from 'styled-components';

const Explanation = styled.div`
p {
    width: 70%;
    text-align: center;
    margin: 10px auto;
    font-size: 1.5rem;
}
`

const Description = (props) => {
    const { explanation } = props
    return (
        <Explanation>
            <p>{ explanation }</p>
        </Explanation>
    )
}

export default Description
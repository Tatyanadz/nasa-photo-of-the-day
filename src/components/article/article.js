import React from "react";
import styled from "styled-components";

//Article Style
const Details = styled.div`
    display: flex;
    justify-content: space-between;
`;

const DateStyle = styled.h4`
    font-weight: bold;
`;

const Explanation = styled.p`
    text-align: jsutify-content;
`;

function Article({date, explanation}) {
    return (
        <div> 
            <div>
                <Details>
                    <DateStyle>{date}></DateStyle>
                </Details>
            </div>
            <Explanation>{explanation}</Explanation>
        </div>
    );
}

export default Article;
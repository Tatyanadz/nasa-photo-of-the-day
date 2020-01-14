import React from "react";
import styled from "styled-components";



//Header styles
const TopH1 = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledHeader = styled.div`
    display: flex;
    jsutify-content: center;
`;

const Title = styled.h3`
    color: black;
`

function Header ({title, version}) {
    return (
        <div>
            <TopH1>NASA PHOTO OF THE DAY!</TopH1>
            <StyledHeader>
                <Title>{title}</Title>
                <version className="version">Version: {version}</version>
            </StyledHeader>
        </div>
    )
}

export default Header;
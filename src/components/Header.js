import { getQueriesForElement } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
    position: fixed;
    width:100vw;
    height:10vh;
    display:block;
    top:0;
    left:0;
    right:0;
    background:#fff;
    z-index:1;
`;

const StyledLogo = styled.div`
    width:10%;
    height:6vh;
    margin-top:1%;
    margin-left:8.5vw;
    display:inline-block;
`;

const ulStyle = {
    position:"left",
    display:"inline-block",
    width: "40%",
    "margin-left": "28%",
    "list-style": "none"
};

const liStyle = {
    display:"inline-block",
    width: "24.6%",
    color : "#9cd8f8",
};

const aStyle = {
    display : "block",
    "text-align": "center",
    "-webkit-text-stroke": "1px #175dc6",
    "color": "#9cd8f8",
    "font-size": "22px"
}


const Header = () => {

    function changeFont(e) {
        e.target.style.color = '#175dc6';
    };
    function leaveFont(e) {
        e.target.style.color = '#9cd8f8';
    };

    return(
        <StyledHeader>
            <StyledLogo>
                <img src="/images/logo.png" alt="logo" style={{width:"100%", height:"90%", align:"center"}}/>
            </StyledLogo>
                <ul style={ulStyle}>
                    <li style={liStyle}><a href="./src/components/Main.js" style={aStyle} 
                                            onMouseOver={changeFont} onMouseLeave={leaveFont}>Main</a></li>
                    <li style={liStyle}><a href="./src/components/About.js" style={aStyle} 
                                            onMouseOver={changeFont} onMouseLeave={leaveFont}>About me</a></li>
                    <li style={liStyle}><a href="./src/components/Project.js" style={aStyle} 
                                            onMouseOver={changeFont} onMouseLeave={leaveFont}>Project</a></li>
                    <li style={liStyle}><a href="./src/components/Contact.js" style={aStyle} 
                                            onMouseOver={changeFont} onMouseLeave={leaveFont}>Contact</a></li>
                </ul>
        </StyledHeader>
    );
};

export default Header;
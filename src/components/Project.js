import React from 'react';
import styled from 'styled-components';

const StyleProject = styled.div`
    position:relative;
    width:100%;
    height:93vh;
    top:100vh;
`;

const StyleProjectDiv = styled.div`
    position:relative;
    width:80%;
    height:75%;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
`;

const StyleContainer = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 0.1fr 0.5fr 0.4fr 0.1fr;
    grid-template-rows: 0.8fr 0.2fr;
    width:90%;
    height:80%;
    margin: auto;
    top:50%;
    transform: translateY(-50%);
    border:2px solid #175DC6;
`;

const Project = () => {
    return(
        <StyleProject id="3">
            <StyleProjectDiv>
                <StyleContainer>
                    <div style={{"grid-row": "span 2"}}>화살표</div>
                    <div style={{border: '1px solid black'}}>project img</div>
                    <div style={{border: '1px solid black'}}>project content</div>
                    <div style={{"grid-column": "span 2", border: '1px solid black'}}>ooo</div>
                    <div style={{"grid-row": "span 2"}}>화살표</div>
                </StyleContainer>
            </StyleProjectDiv>
        </StyleProject>
    );
};

export default Project;

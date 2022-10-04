import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { Link } from "react-scroll";

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
    'text-align': "center"
};

const useScroll = () => {
    //useState를 y:0으로 초기화
    const [state, setState] = useState({y:0});

    //현재 윈도우 스크롤 바의 y좌표를 state를 수정함.
    const onScroll = () => {
        setState({ y: window.scrollY});
    };

    //window에 onScroll eventlistener를 추가하고, 해당 event에 대한 remove eventlistener를 return함.
    useEffect(()=>{
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return state;
    //useScroll 함수는 state y:?를 반환함.
};


const Header = () => {
    const {y} = useScroll(); // Scroll 위치에 따라 메뉴 color 변경

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
                    <li style={liStyle}><Link to="1" spy={true} smooth={true}>
                        <a href="#" style={{'-webkit-text-stroke': '1px #175dc6','font-size': '22px', color: y < 570 ? "#175dc6" : "#9cd8f8"}}
                            onMouseOver={changeFont} onMouseLeave={leaveFont}>Main</a></Link></li>
                    <li style={liStyle}><Link to="2" spy={true} smooth={true}>
                        <a href="#" style={{'-webkit-text-stroke': '1px #175dc6', 'font-size': '22px', color: 570 <= y &&  y < 1140 ? "#175dc6" : "#9cd8f8"}}
                            onMouseOver={changeFont} onMouseLeave={leaveFont}>About me</a></Link></li>
                    <li style={liStyle}><Link to="3" spy={true} smooth={true}>
                        <a href="#" style={{'-webkit-text-stroke': '1px #175dc6', 'font-size': '22px', color: 1140 <= y &&  y < 1720 ? "#175dc6" : "#9cd8f8"}} 
                            onMouseOver={changeFont} onMouseLeave={leaveFont}>Project</a></Link></li>
                    <li style={liStyle}><Link to="4" spy={true} smooth={true}>
                        <a href="#" style={{'-webkit-text-stroke': '1px #175dc6', 'font-size': '22px', color: 1720 <= y? "#175dc6" : "#9cd8f8"}} 
                            onMouseOver={changeFont} onMouseLeave={leaveFont}>Contact</a></Link></li>
                </ul>
        </StyledHeader>
    );
};

export default Header;
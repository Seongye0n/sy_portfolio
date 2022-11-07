import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import { Link } from "react-scroll";
import '../style/styles.scss';

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

    @media screen and (max-width:1023px) {
    /* 타블렛 */
        position: fixed;
        width:100%;
        height:7vh;
        top:0;
        left:0;
        z-index:1;
    }
`;



const StyledLogo = styled.div`
    width:10%;
    height:6vh;
    margin-top:1%;
    margin-left:8.5vw;
    display:inline-block;

    @media screen and (max-width:1023px) {
    /* 타블렛 */
        width:20%;
        height:6vh;
        margin-left:2vw;
    }
            
    @media screen and (max-width:767px) {
    /* 모바일 */
        
    
    }
`;

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
                <ul className='ulStyle'>
                    <li className='liStyle'><Link to="1" spy={true} smooth={true} style={{WebkitTextStroke: '1px #175dc6', fontSize: '22px', color: y < 570 ? "#175dc6" : "#9cd8f8"}}
                            onMouseOver={changeFont} onMouseLeave={leaveFont}>Main</Link></li>
                    <li className='liStyle'><Link to="2" spy={true} smooth={true} style={{WebkitTextStroke: '1px #175dc6', fontSize: '22px',  lineHeight:'2px', color: 570 <= y &&  y < 1140 ? "#175dc6" : "#9cd8f8"}}
                            onMouseOver={changeFont} onMouseLeave={leaveFont}>About me</Link></li>
                    <li className='liStyle'><Link to="3" spy={true} smooth={true} style={{WebkitTextStroke: '1px #175dc6', fontSize: '22px',color: 1140 <= y &&  y < 1720 ? "#175dc6" : "#9cd8f8"}}
                            onMouseOver={changeFont} onMouseLeave={leaveFont}>Project</Link></li>
                    <li className='liStyle'><Link to="4" spy={true} smooth={true} style={{WebkitTextStroke: '1px #175dc6', fontSize: '22px', color: 1720 <= y? "#175dc6" : "#9cd8f8"}}
                            onMouseOver={changeFont} onMouseLeave={leaveFont}>Contact</Link></li>
                </ul>
        </StyledHeader>
    );
};

export default Header;
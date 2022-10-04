import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import About_donut from './About_donut';

const StyleAbout = styled.div`
    position:relative;
    width:100%;
    height:93vh;
    top:100vh;
`;

const StyleAboutDiv = styled.div`
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
    grid-template-columns: 1fr 1fr;
    width:90%;
    height:80%;
    margin: auto;
    top:50%;
    transform: translateY(-50%);
`;

const StyleH3 = {
    'display': 'inline-block',
    'font-size': '22px',
    'color': '#9cd8f8',
    'margin-top' : '2%',
    'margin-bottom' : '0%',
    'margin-left' : '15%',
    '-webkit-text-stroke': '1.5px #175dc6'
};

const StyleUl = {
    'float' : 'left',
    'list-style': 'none',
    'font-size' : '15px',
    'color' : '#175dc6',
    'font-weight' : 'bold',
    'margin-left' : '7%',
};

const Styleli = {
    'float' : 'left',
    'display': 'inline',
    'padding-top': '5px'
};

const Stylespan = {
    'margin-top': '5px',
    'margin-left': '6%',
    'float' : 'left',
    'font-size' : '12.5px',
    'color' : '#175dc6',
};
const Stylespan2 = {
    'float': 'left',
    'width' : '110px',
    'text-align' : 'right',
    'margin-right': '10px'
};
const Stylespan3={
    'font-size' : '14px',
    'color' : '#175dc6',
};

const About = () => {
    return( 
        <StyleAbout id="2">
            <StyleAboutDiv>
               <StyleContainer>
                    <div style={{"grid-row": "span 2"}}>
                        <h3 style={StyleH3}>= Skill =</h3>
                        <About_donut/>
                        {/* <Pratice/> */}
                    </div>
	                <div>
                        <h3 style={StyleH3}>= Certificate =</h3>
                        <ul style={StyleUl}>
                            <li style={Styleli}>- 정보처리기사  <span style={Stylespan}>(2019.08.16)</span></li>
                            <li style={Styleli}>- 웹디자인기능사 <span style={Stylespan}>(2022.06.24)</span></li>
                        </ul>
                    </div>
	                <div>
                        <h3 style={StyleH3}>= Timeline =</h3>
                        <ul style={StyleUl}>
                            <li style={Styleli}><span style={Stylespan2}>2016</span><span style={Stylespan3}>신라대학교 컴퓨터공학과 입학</span></li>
                            <li style={Styleli}><span style={Stylespan2}>2019 ~ 2020</span><span style={Stylespan3}>웹 인턴 및 신라대학교 IT 학과 졸업</span></li>
                            <li style={Styleli}><span style={Stylespan2}>2021 ~ 2022</span><span style={Stylespan3}>인제대학교 약물유전체연구센터 근무<br/>
                            <span style={{'margin-left': '120px'}}>웹디자인 기능사 자격증 취득 및 Portfolio 제작</span></span></li>
                        </ul>
                    </div>
               </StyleContainer>
            </StyleAboutDiv>
        </StyleAbout>
    );
};

export default About;
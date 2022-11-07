import React, {useEffect, useRef} from 'react';
import styled from 'styled-components';
import About_donut from './About_donut';
import '../style/styles.scss';


const StyleAbout = styled.div`
    position:relative;
    width:100%;
    height:93vh;
    top:100vh;
    @media screen and (max-width:1023px) {
        width:100%;
        top:40vh;
        height:40vh;
    }
`;

const StyleAboutDiv = styled.div`
    position:relative;
    width:80%;
    height:75%;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    @media screen and (max-width:1023px) {
        width:90%;
        height:80%;
    }
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
    @media screen and (max-width:1023px) {
        background-color:orange;
        width:100%;
        height:100%;
        grid-template-rows: 1fr 1fr 1fr;
    }
`;

const StyleUl = {
    float : 'left',
    listStyle: 'none',
    fontSize : '15px',
    color : '#175dc6',
    fontWeight : 'bold',
    marginLeft : '7%',
};

const Styleli = {
    float : 'left',
    display: 'inline',
    paddingTop: '5px'
};

const Stylespan = {
    marginTop: '5px',
    marginLeft: '6%',
    float : 'left',
    fontSize : '12.5px',
    color : '#175dc6',
};
const Stylespan2 = {
    float: 'left',
    width : '110px',
    textAlign : 'right',
    marginRight: '10px'
};
const Stylespan3={
    fontSize : '14px',
    color : '#175dc6',
};

const About = () => {
    return( 
        <StyleAbout id="2">
            <StyleAboutDiv>
               <StyleContainer>
                    <div style={{gridRow: "span 2"}}>
                        <h3 className='StyleH3'>= Skill =</h3>
                        <About_donut/>
                        {/* <Pratice/> */}
                    </div>
	                <div>
                        <h3 className='StyleH3'>= Certificate =</h3>
                        <ul style={StyleUl}>
                            <li style={Styleli}>- 정보처리기사  <span style={Stylespan}>(2019.08.16)</span></li>
                            <li style={Styleli}>- 웹디자인기능사 <span style={Stylespan}>(2022.06.24)</span></li>
                        </ul>
                    </div>
	                <div>
                        <h3 className='StyleH3'>= Timeline =</h3>
                        <ul style={StyleUl}>
                            <li style={Styleli}><span style={Stylespan2}>2016</span><span style={Stylespan3}>신라대학교 컴퓨터공학과 입학</span></li>
                            <li style={Styleli}><span style={Stylespan2}>2019 ~ 2020</span><span style={Stylespan3}>웹 인턴 및 신라대학교 IT 학과 졸업</span></li>
                            <li style={Styleli}><span style={Stylespan2}>2021 ~ 2022</span><span style={Stylespan3}>인제대학교 약물유전체연구센터 근무<br/>
                            <span style={{marginLeft: '120px'}}>웹디자인 기능사 자격증 취득 및 Portfolio 제작</span></span></li>
                        </ul>
                    </div>
               </StyleContainer>
            </StyleAboutDiv>
        </StyleAbout>
    );
};

export default About;
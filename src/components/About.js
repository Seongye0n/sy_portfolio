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
    @media screen and (max-width:767px) {
        width:100%;
        height:80vh;
        top:29vh;
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
    @media screen and (max-width:767px) {
        width:100%;
        height:100%;
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
        width:100%;
        height:100%;
        grid-template-columns: 0.5fr 1fr;
    }
    @media screen and (max-width:767px) {
        width:100%;
        height:100%;
        display:grid;
        grid-template-columns: 1fr;
    }
`;

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
                    <div style={{gridRow: "span 2"}} className='aboutGrid'>
                        <h3 className='StyleH3'>= Skill =</h3>
                        <About_donut/>
                    </div>
	                <div className='aboutGrid'>
                        <h3 className='StyleH3'>= Certificate =</h3>
                        <ul className='StyleUl'>
                            <li style={Styleli}>- ??????????????????  <span style={Stylespan}>(2019.08.16)</span></li>
                            <li style={Styleli}>- ????????????????????? <span style={Stylespan}>(2022.06.24)</span></li>
                        </ul>
                    </div>
	                <div className='aboutGrid'>
                        <h3 className='StyleH3'>= Timeline =</h3>
                        <ul className='StyleUl'>
                            <li style={Styleli}><span style={Stylespan2}>2016</span><span style={Stylespan3}>??????????????? ?????????????????? ??????</span></li>
                            <li style={Styleli}><span style={Stylespan2}>2019 ~ 2020</span><span style={Stylespan3}>??? ?????? ??? ??????????????? IT ?????? ??????</span></li>
                            <li style={Styleli}><span style={Stylespan2}>2021 ~ 2022</span><span style={Stylespan3}>??????????????? ??????????????????????????? ??????<br/>
                            <span className='aboutSpan'>???????????? ????????? ????????? ?????? ??? Portfolio ??????</span></span></li>
                        </ul>
                    </div>
               </StyleContainer>
            </StyleAboutDiv>
        </StyleAbout>
    );
};

export default About;
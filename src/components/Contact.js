import React from 'react';
import styled from 'styled-components';
import '../style/styles.scss';

const StyleContact = styled.div`
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
        height:40vh;
        top:29vh;
    }
`;

const StyleContactDiv = styled.div`
    position:relative;
    width:80%;
    height:75%;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    @media screen and (max-width:1023px) {
        width:100%;
        height:100%;
    }
    @media screen and (max-width:767px) {
        width:100%;
        height:100%;
    }
`;

const StyleProfile = styled.div`
    position: absolute;
    width:90%;
    height:80%;
    margin: auto;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
    @media screen and (max-width:767px) {
        width:100%;
        height:100%;
    }
`;

const StyleH3 = {
    display: 'block',
    fontSize: '22px',
    color: '#9cd8f8',
    marginTop : '5%',
    marginLeft : '10%',
    WebkitTextStroke: '1.5px #175dc6'
};

const Styleli = {
    padding: '10px 10px 10px 0px',
    color : '#175dc6'
};

const Contact = () => {
    return(
        <StyleContact id="4">
            <StyleContactDiv>
                <StyleProfile>
                    <h3 style={StyleH3}>= Contact =</h3>
                        <ul className='contactUl'>
                            <li style={Styleli}><span className='contactSpan'>KakaoTalk RandomChat :</span>
                                                <span className='contactSpan2 contactSpan3'><a href='https://open.kakao.com/o/sYEpyCEe' target='_blank'>https://open.kakao.com/o/sYEpyCEe</a></span></li><br/><br/>
                            <li style={Styleli}><span className='contactSpan'>Blog :</span>
                                                <span className='contactSpan2'><a className='contactA' href='https://blog.naver.com/tjddus0630' target='_blank'>https://blog.naver.com/tjddus0630</a></span></li><br/>
                            <li style={Styleli}><span className='contactSpan'>Instagram :</span>
                                                <span className='contactSpan2'><a className='contactA' href='https://www.instagram.com/ye0.7n_s/' target='_blank'>https://www.instagram.com/ye0.7n_s/</a></span></li><br/>
                            <li style={Styleli}><span className='contactSpan'>E-mail :</span>
                                                <span className='contactSpan2'>tjddus0630@gmail.com</span></li>
                        </ul>
                </StyleProfile>
            </StyleContactDiv>
        </StyleContact>
    );
};

export default Contact;

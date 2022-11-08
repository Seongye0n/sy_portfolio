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
`;

const StyleProfile = styled.div`
    position: absolute;
    width:90%;
    height:80%;
    margin: auto;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%);
`;

const StyleH3 = {
    display: 'block',
    fontSize: '22px',
    color: '#9cd8f8',
    marginTop : '5%',
    marginLeft : '10%',
    WebkitTextStroke: '1.5px #175dc6'
};

const StyleUl = {
    listStyle: 'none',
    fontSize : '15px',
    color : '#175dc6',
    marginTop : '3%',
    marginLeft : '10%',
    fontWeight : 'bold'
};

const Styleli = {
    padding: '10px 10px 10px 0px',
    color : '#175dc6'
};
const Stylespan = {
    float: 'left',
    width : '200px',
    textAlign : 'right',
    marginRight: '10px',
    fontSize : '16px'
};
const Stylespan2 = {
    fontSize : '13px',
    color : '#175dc6'
};

const Contact = () => {
    return(
        <StyleContact id="4">
            <StyleContactDiv>
                <StyleProfile>
                    <h3 style={StyleH3}>= Contact =</h3>
                        <ul style={StyleUl}>
                            <li style={Styleli}><span style={Stylespan}>KakaoTalk RandomChat :</span>
                                                <span style={Stylespan2}><a href='https://open.kakao.com/o/sYEpyCEe' target='_blank'>https://open.kakao.com/o/sYEpyCEe</a></span></li>
                            <li style={Styleli}><span style={Stylespan}>Blog :</span>
                                                <span style={Stylespan2}><a href='https://blog.naver.com/tjddus0630' target='_blank'>https://blog.naver.com/tjddus0630</a></span></li>
                            <li style={Styleli}><span style={Stylespan}>Instagram :</span>
                                                <span style={Stylespan2}><a href='https://www.instagram.com/ye0.7n_s/' target='_blank'>https://www.instagram.com/ye0.7n_s/</a></span></li>
                            <li style={Styleli}><span style={Stylespan}>E-mail :</span>
                                                <span style={Stylespan2}>tjddus0630@gmail.com</span></li>
                        </ul>
                </StyleProfile>
            </StyleContactDiv>
        </StyleContact>
    );
};

export default Contact;
